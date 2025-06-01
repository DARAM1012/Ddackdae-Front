// src/components/search/sideOpenBody/DefaultBody.jsx
import "@/components/search/sideOpenBody/DefaultBody.css";
import seoulPark from "@/assets/seoulPark.jpeg"; // 예시 이미지
import FavoriteButton from "./reuse/FavoriteButton.jsx";
import RealTimeStateColor from "./reuse/RealTimeStateColor.jsx";
import useSidebarStore from "@/stores/useSidebarStore";
import { useEffect, useState } from "react";

export default function DefaultBody({ params }) {
  const { setSelectedKey } = useSidebarStore();

  // 1) Nearby 모드를 위한 상태
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  // size는 params.size가 있으면 그 값을, 없으면 기본 20개
  const size = params?.size || 20;

  // 2) params가 변경될 때마다 → 리스트 초기화
  useEffect(() => {
    if (!params) {
      // Nearby 모드가 아닐 때(클러스터 클릭 전)에는 초기화만 수행
      setList([]);
      setPage(0);
      setHasMore(true);
      return;
    }
    // Nearby 모드가 활성화되면, page 0부터 다시 시작
    setList([]);
    setPage(0);
    setHasMore(true);
  }, [params]);

  // 3) params가 있고, 더 가져올 데이터가 있을 때만 fetch 수행
  useEffect(() => {
    if (!params || !hasMore) return;

    // // paging + 반경 + 위/경도 → Body 구성
    const body = {
      lat: params.lat,
      lot: params.lot,
      radius: params.radius,
      page,
      size,
    };

    // **중요**: 개발 중에는 "/api/v1/nearby"로 호출해야 Vite proxy를 탄다
    fetch("/api/v1/nearby", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("📥 [DefaultBody] /api/v1/nearby 응답:", data);

        // ← **여기만 수정**: data.content가 배열인지, data.result가 배열인지, data가 배열인지 순차 체크
        const items = Array.isArray(data.content)
          ? data.content
          : Array.isArray(data.result)
          ? data.result
          : Array.isArray(data)
          ? data
          : [];

        // items.length가 size 미만이면 더 가져올 필요 없음
        if (items.length < size) {
          setHasMore(false);
        }

        // 기존 ID를 유지하며 새로운 목록을 이어 붙인다
        setList((prev) => [...prev, ...items]);
      })
      .catch((err) => console.error("Nearby API 에러:", err));
  }, [params, page, hasMore, size]);

  // 4) params가 없으면 → 아무것도 렌더하지 않음
  if (!params) {
    return null;
  }

  // 시간을 "HHmm" → "HH:mm" 형태로 바꿔주는 헬퍼 함수
  const formatHHmm = (hhmm) => {
    if (typeof hhmm !== "string" || hhmm.length !== 4) return hhmm;
    return `${hhmm.slice(0, 2)}:${hhmm.slice(2, 4)}`;
  };

  // 5) Nearby 모드에서 실제 주차장 목록 UI 렌더링
  return (
    <section className="NearbySection">
      {list.length === 0 && <p style={{ textAlign: "center" }}>불러오는 중…</p>}
      {list.map((lot, idx) => (
        <article  key={lot.plId ?? `lot-${idx}`} className="ParkingLotComponent">
          {/* 5-1) 실시간 상태 표시용 컬러 도형 */}
          <RealTimeStateColor />

          {/* 5-2) 주차장 썸네일 이미지 (예시) */}
          <div
            className="parkingLotImg"
            onClick={() => setSelectedKey("details")}
          >
            <img
              src={seoulPark}
              alt="parkingLot"
            />
          </div>

          {/* 5-3) 주차장 정보: 이름 / 종류 */}
          <div className="parkingLotInfo_1">
            <p onClick={() => setSelectedKey("details")}>{lot.pkltNm}</p>
            <p>{lot.pkltKndNm}</p>
          </div>

          {/* 5-4) 주차장 정보: 평일 운영시간 / 즐겨찾기 버튼 */}
          <div className="parkingLotInfo_2">
            <p>
              운영시간 {formatHHmm (lot.wdOperBgngTm)} ~ {formatHHmm (lot.wdOperEndTm)}
            </p>
            <FavoriteButton />
          </div>
        </article>
      ))}

      {/* 6) 끝까지 다 불러왔다면 “끝!” */}
      {!hasMore && <p style={{ textAlign: "center" }}>끝!</p>}
    </section>
  );
}
