import "@/components/Sidebar.css";
import logo2 from "@/assets/logo2.png";
import { FaSearch, FaBookmark, FaUser } from "react-icons/fa";
import SideOpen from "@/components/Search/SideOpen";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarNav">
        <div className="top">
          <div className="logo">
            <img src={logo2} alt="로고" />
          </div>
          <div className="menu">
            <div className="icon">
              <FaSearch />
              <span>검색</span>
            </div>
            <div className="icon">
              <FaBookmark />
              <span>찜</span>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="icon">
            <FaUser />
            <span>로그인</span>
          </div>
        </div>
      </div>
      <div className="sideOpen">
        <SideOpen />
      </div>
    </div>
  );
}

export default Sidebar;
