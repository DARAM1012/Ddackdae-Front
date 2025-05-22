// src/App.jsx
import { useEffect, useRef, useState } from 'react'
import Sidebar from '@/components/Sidebar.jsx'
import './App.css'

export default function App() {
  const mapRef     = useRef(null)
  const [map, setMap]  = useState(null)
  const markersRef = useRef([])

  // 1) 네이버 맵 로드 + 초기화
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `
      https://openapi.map.naver.com/openapi/v3/maps.js
      ?ncpKeyId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}
    `.replace(/\s+/g, '')
    script.async = true
    script.onload = () => {
      const naverMap = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.5665, 126.9780),
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT
        }
      })
      setMap(naverMap)
    }
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  // 2) bounds/zoom 변경 시마다 → 백엔드 호출 → 마커 그리기
  useEffect(() => {
    if (!map) return

    const update = () => {
      // (1) 기존 마커 제거
      markersRef.current.forEach(m => m.setMap(null))
      markersRef.current = []

      // (2) bounds + zoomLevel
      const b      = map.getBounds()
      const sw     = b.getSW()
      const ne     = b.getNE()
      const zoom   = map.getZoom()
      const body   = {
        swLat:     sw.lat(),
        swLot:     sw.lng(),
        neLat:     ne.lat(),
        neLot:     ne.lng(),
        zoomLevel: zoom
      }

      // (3) API 호출
      fetch('/api/v1/pklt', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(body),
      })
      .then(res => res.json())
      .then(json => {
        // { result: [...] } 또는 순수 배열 지원
        const list = Array.isArray(json.result)
          ? json.result
          : Array.isArray(json)
            ? json
            : []

        // (4) 응답 형태별로 마커 생성
        const newMarkers = list.map(item => {
          let html, lat, lot, anchor
          if (Array.isArray(item)) {
            // [동명, count, lat, lot]
            const [dong, count, headLat, headLot] = item
            lat    = headLat
            lot    = headLot
            anchor = new window.naver.maps.Point(18, 18)
            html   = `<div class="cluster-marker">${count}</div>`
          } else {
            // ParkingLotDto 객체
            lat    = item.lat
            lot    = item.lot
            anchor = new window.naver.maps.Point(0, 0)
            html   = `<div class="price-marker">${item.prkCrg}원</div>`
          }

          return new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(lat, lot),
            icon: {
              content: html,
              anchor
            },
            map
          })
        })

        markersRef.current = newMarkers
      })
      .catch(err => console.error('API 호출 에러:', err))
    }

    // 초기 + 줌/드래그가 끝날 때마다 재호출
    update()
    const zLis = map.addListener('zoom_changed', update)
    const dLis = map.addListener('dragend',       update)
    return () => {
      window.naver.maps.Event.removeListener(zLis)
      window.naver.maps.Event.removeListener(dLis)
    }
  }, [map])

  return (
    <div className="app-container">
      <div className="sidebar-wrapper"><Sidebar/></div>
      <div ref={mapRef} id="map" className="map-view"/>
    </div>
  )
}
