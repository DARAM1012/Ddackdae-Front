import "@/components/Sidebar.css";
import logo2 from "@/assets/logo2.png";
import {
  FaSearch,
  FaBookmark,
  FaUser,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import SideOpen from "@/components/Search/SideOpen";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("default");

  const SelectKey = (value) => {
    setOpen(true);
    setSelectValue(value);
  };

  return (
    <div className="sidebar">
      <div className="sidebarNav">
        <div className="top">
          <div className="logo" onClick={() => SelectKey("default")}>
            <img src={logo2} alt="로고" />
          </div>
          <div className="menu">
            <div className="icon" onClick={() => SelectKey("search")}>
              <FaSearch />
              <span>검색</span>
            </div>
            <div className="icon" onClick={() => SelectKey("favorite")}>
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
      <div className={`sideOpen ${open ? "open" : "closed"}`}>
        <SideOpen selectValue={selectValue} />
      </div>
      <div
        className={`SideOpenAndCloseBtnBox ${open && "open"}`}
        onClick={() => setOpen((o) => !o)}
      >
        {!open && <FaChevronRight className="SideOpenAndCloseBtn OpenBtn" />}
        {open && <FaChevronLeft className="SideOpenAndCloseBtn CloseBtn" />}
      </div>
    </div>
  );
}

export default Sidebar;
