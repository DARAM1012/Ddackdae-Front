import logo from "@/assets/logo.png";
import "@/components/search/SideOpen.css";
import { FaSearch, FaClock } from "react-icons/fa";
import DefaultBody from "@/components/search/sideOpenBody/DefaultBody.jsx";
import SearchBody from "@/components/search/sideOpenBody/SearchBody.jsx";
import FavoriteBody from "@/components/search/sideOpenBody/FavoriteBody.jsx";
import ParkingLotDetails from "@/components/search/sideOpenBody/ParkingLotDetails.jsx";
import useSidebarStore from "@/stores/useSidebarStore";
import { useState } from "react";
// import { useEffect, useState } from "react";

function SideOpen() {
  const { selectedKey, setSelectedKey } = useSidebarStore();
  const hashTagRank = ["동대문", "서울역", "광화문", "롯데타워"];
  const [searchTerm, setSearchTerm] = useState("");

  // selectedKey값에 따라 sideBody에 보여지는 컴포넌트 변경
  const bodyMap = {
    default: <DefaultBody />,
    search: <SearchBody />,
    favorite: <FavoriteBody />,
    details: <ParkingLotDetails />,
  };

  const inputSearchTerm = () => {
    if (!searchTerm.trim()) return alert("검색어를 입력하세요");
    console.log("검색어: ", searchTerm);
    setSelectedKey("search");
  };

  const handleHashTagClick = (place) => {
    console.log('해시태그 클릭: ',place);
    setSearchTerm(place);
    setSelectedKey("search");
  };

  return (
    <section className="sideOpen2">
      {/* Side Header */}
      <article className="sideHeader">
        <div className="logo2">
          <img src={logo} alt="logo" />
        </div>
        <div className="searchInput">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="검색어를 입력하세요."
          ></input>
          <FaSearch className="searchIcon" onClick={inputSearchTerm} />
        </div>
        <div className="hashTag">
          {hashTagRank.map((place, index) => (
            <span key={index} onClick={() => handleHashTagClick(place)}>#{place}</span>
          ))}
        </div>
      </article>

      {/* Side Body */}
      <article className="sideBody">
        <p className="upDateTime">
          <FaClock /> 업데이트 : 04.25(금) 오후 7:24
        </p>
        {bodyMap[selectedKey] || <DefaultBody />}
      </article>

      {/* Side Footer */}
      <article className="sideFooter"></article>
    </section>
  );
}

export default SideOpen;
