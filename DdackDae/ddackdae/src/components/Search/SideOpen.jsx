import logo from "@/assets/logo.png";
import "@/components/search/SideOpen.css";
import { FaSearch, FaClock } from "react-icons/fa";
import DefaultBody from "@/components/search/sideOpenBody/DefaultBody.jsx";
import SearchBody from "@/components/search/sideOpenBody/SearchBody.jsx";
import FavoriteBody from "@/components/search/sideOpenBody/FavoriteBody.jsx";
import ParkingLotDetails from "@/components/search/sideOpenBody/ParkingLotDetails.jsx";
import { useEffect, useState } from "react";

function SideOpen(selectKey) {
  const hashTagRank = ["동대문", "서울역", "광화문", "롯데타워"];
  const [viewBody, setViewBody] = useState(selectKey.selectValue);

  useEffect(() => {
    setViewBody(selectKey.selectValue);
  }, [selectKey.selectValue]);

  const bodyMap = {
    default: <DefaultBody />,
    search: <SearchBody />,
    favorite: <FavoriteBody />,
    details: <ParkingLotDetails />,
  };

  return (
    <section className="sideOpen2">
      {/* Side Header */}
      <article className="sideHeader">
        <div className="logo2">
          <img src={logo} alt="logo" />
        </div>
        <div className="searchInput">
          <input type="text" placeholder="검색어를 입력하세요."></input>
          <FaSearch
            className="searchIcon"
            onClick={() => setViewBody("search")}
          />
        </div>
        <div className="hashTag">
          {hashTagRank.map((place, index) => (
            <span key={index}>#{place}</span>
          ))}
        </div>
      </article>

      {/* Side Body */}
      <article className="sideBody">
      <p className="upDateTime">
        <FaClock /> 업데이트 : 04.25(금) 오후 7:24
      </p>
        {bodyMap[viewBody] || <DefaultBody />}
      </article>

      {/* Side Footer */}
      <article className="sideFooter"></article>
    </section>
  );
}

export default SideOpen;
