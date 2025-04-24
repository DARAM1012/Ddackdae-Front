// src/App.jsx
import { useEffect, useRef } from 'react'
import '@/App.css'
import parkingClusters from '@/data/mockParkingCluster'
import Sidebar from '@/components/Sidebar'


function App() {
  const mapRef = useRef(null)
  const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID

  useEffect(() => {
    if (!clientId || !mapRef.current) return

    const script = document.createElement('script')
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`
    script.async = true

    script.onload = () => {
      if (window.naver && mapRef.current) {
        const map = new window.naver.maps.Map(mapRef.current, {
          center: new window.naver.maps.LatLng(37.5665, 126.9780),
          zoom: 14,
        })

 // ✅ 클러스터 마커 렌더링
 parkingClusters.forEach((cluster) => {
  const _marker = new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(cluster.lat, cluster.lng),
    map,
    icon: {
      content: `
        <div style="
          background-color: rgba(0, 183, 178, 0.8);
          color: white;
          font-size: 16px;
          font-weight: bold;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 4px rgba(0,0,0,0.3);
        ">
          ${cluster.count}
        </div>
      `,
      size: new window.naver.maps.Size(44, 44),
      anchor: new window.naver.maps.Point(22, 22),
    },
  })
})
      }
    }

    document.head.appendChild(script)
  }, [clientId])

  return (
    <div>
      <Sidebar /> {/* ✅ 지도 위에 사이드바 */}
      <div
        ref={mapRef}
        id="map"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
      />
      
    </div>
  )
}

export default App