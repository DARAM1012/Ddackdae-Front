// src/components/search/SideOpen.jsx
import logo from "@/assets/logo.png";
import "@/components/search/SideOpen.css";
import { FaSearch, FaClock } from "react-icons/fa";
import DefaultBody from "@/components/search/sideOpenBody/DefaultBody.jsx";
import SearchBody from "@/components/search/sideOpenBody/SearchBody.jsx";
import FavoriteBody from "@/components/search/sideOpenBody/FavoriteBody.jsx";
import ParkingLotDetails from "@/components/search/sideOpenBody/ParkingLotDetails.jsx";
import useSidebarStore from "@/stores/useSidebarStore";
import { useState } from "react";

export default function SideOpen() {
  // store에서 selectedKey, nearbyParams, setSelectedKey 가져오기
  const { selectedKey, nearbyParams, setSelectedKey } = useSidebarStore();
  const [searchTerm, setSearchTerm] = useState("");
  const hashTagRank = ["동대문", "서울역", "광화문", "롯데타워"];

  const inputSearchTerm = () => {
    if (!searchTerm.trim()) {
      alert("검색어를 입력하세요");
      return;
    }
    setSelectedKey("search");
  };

  const handleHashTagClick = (place) => {
    setSearchTerm(place);
    setSelectedKey("search");
  };

  // bodyMap 정의: "nearby" 모드일 때 DefaultBody에 nearbyParams를 props로 넘겨준다
  const bodyMap = {
    default:  <DefaultBody params={null} />,
    search:   <SearchBody term={searchTerm} />,
    favorite: <FavoriteBody />,
    nearby:   <DefaultBody params={nearbyParams} />,
    details:  <ParkingLotDetails info={nearbyParams} />,
  };

  return (
    <section className="sideOpen2">
      {/* ── Side Header ───────────────────────────────────────────── */}
      <article className="sideHeader">
        <div className="logo2" onClick={() => setSelectedKey("default")}>
          <img src={logo} alt="logo" />
        </div>
        <div className="searchInput">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="검색어를 입력하세요."
          />
          <FaSearch className="searchIcon" onClick={inputSearchTerm} />
        </div>
        <div className="hashTag">
          {hashTagRank.map((place, i) => (
            <span key={i} onClick={() => handleHashTagClick(place)}>
              #{place}
            </span>
          ))}
        </div>
      </article>

      {/* ── Side Body ─────────────────────────────────────────────── */}
      <article className="sideBody">
        <p className="upDateTime">
          <FaClock /> 업데이트 : {new Date().toLocaleString()}
        </p>
        {bodyMap[selectedKey] || <DefaultBody params={null} />}
      </article>

      {/* ── Side Footer ───────────────────────────────────────────── */}
      <article className="sideFooter"></article>
    </section>
  );
}
