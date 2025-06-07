// src/App.jsx
import { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/Sidebar.jsx";
import useSidebarStore from "@/stores/useSidebarStore";
import "./App.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// 예) "http://localhost:8080" 혹은 "http://34.47.87.26"

export default function App() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const markersRef = useRef([]);
  const openSidebar = useSidebarStore((s) => s.openSidebar);

  // ────────────────────────────────────────────────────────────────
  // 1) 네이버 맵 스크립트 로드 + 초기화
  // ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `
      https://openapi.map.naver.com/openapi/v3/maps.js
      ?ncpKeyId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}
    `.replace(/\s+/g, "");
    script.async = true;
    script.onload = () => {
      const naverMap = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(37.5665, 126.978),
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      });
      setMap(naverMap);
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // ────────────────────────────────────────────────────────────────
  // 2) bounds/zoom 변경 시 → 클러스터 API 호출 → 마커 갱신
  // ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!map) return;

    const updateClusters = async () => {
      // (1) 기존 마커 모두 지우기
      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = [];

      // (2) 현재 화면 영역(bounds)과 zoomLevel 구하기
      const b = map.getBounds();
      const sw = b.getSW();
      const ne = b.getNE();
      const zoom = map.getZoom();
      const body = {
        swLat: sw.lat(),
        swLot: sw.lng(),
        neLat: ne.lat(),
        neLot: ne.lng(),
        zoomLevel: zoom,
      };
      console.log("📤 [App] /api/v1/pklt 요청 바디:", body);

      try {
        // (3) POST /api/v1/pklt → 구/동 단위 count, avgLat, avgLot 정보 가져오기
        const res = await fetch(`${BASE_URL}/api/v1/pklt`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const json = await res.json();
        console.log("📥 [App] /api/v1/pklt 응답:", json);

        const list = Array.isArray(json.result)
          ? json.result
          : Array.isArray(json)
          ? json
          : [];

        // (4) 받아온 list를 map 돌려서 네이버 Marker 생성
        const newMarkers = list.map((item) => {
          let lat, lot, html, anchor, isCluster;

          // “count + avgLat + avgLot”이 있으면 클러스터 모드
          if (
            item.count != null &&
            item.avgLat != null &&
            item.avgLot != null
          ) {
            isCluster = true;
            lat = item.avgLat;
            lot = item.avgLot;
            anchor = new window.naver.maps.Point(18, 18);
            html = `<div class="cluster-marker">${item.count}</div>`;
          } else {
            // 그렇지 않으면 개별 주차장(요금마커) 모드
            isCluster = false;
            lat = item.lat;
            lot = item.lot;
            anchor = new window.naver.maps.Point(0, 0);
            html = `<div class="price-marker">${item.prkCrg}원</div>`;
          }

          const marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(lat, lot),
            icon: { content: html, anchor },
            map,
          });

          // (5) 클러스터 모드 클릭 시 → 줌인 + 사이드바 nearby 모드 열기
          if (isCluster) {
            marker.addListener("click", () => {
              map.setCenter(marker.getPosition());
              map.setZoom(Math.min(zoom + 2, 18));

              openSidebar("nearby", {
                lat: item.avgLat,
                lot: item.avgLot,
                radius: 500,
                page: 0,
                size: 20,
              });
            });
          }

          return marker;
        });

        markersRef.current = newMarkers;
      } catch (err) {
        console.error("API 호출 에러:", err);
      }
    };

    // **초기 렌더링**과 **zoom_changed / dragend** 이벤트 발생 시마다 호출
    updateClusters();
    const zl = map.addListener("zoom_changed", updateClusters);
    const dl = map.addListener("dragend", updateClusters);
    return () => {
      window.naver.maps.Event.removeListener(zl);
      window.naver.maps.Event.removeListener(dl);
    };
  }, [map, openSidebar]);

  return (
    <div className="app-container">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div ref={mapRef} id="map" className="map-view" />
    </div>
  );
}
