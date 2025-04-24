import logo from "@/assets/logo.png";
import "@/components/Search/SideOpen.css";
import { FaSearch } from "react-icons/fa";

function SideOpen() {
  const hashTagRank = ["동대문", "서울역", "광화문", "롯데타워"];

  return (
    <div className="sideOpen2">
      <div className="sideHeader">
        <div className="logo2">
          <img src={logo} alt="logo" />
        </div>
        <div className="searchInput">
          <input type="text" placeholder="검색어를 입력하세요."></input>
          <FaSearch className="searchIcon" />
        </div>
        <div className="hashTag">
          {hashTagRank.map((place, index) => <span key={index}>#{place}</span>)}
        </div>
      </div>
    </div>
  );
}

export default SideOpen;
