import "@/components/Sidebar.css";
import logo2 from "@/assets/logo2.png";
import {
  FaSearch,
  FaBookmark,
  FaUser,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import SideOpen from "@/components/search/sideOpen";
import { useState } from "react";
import LoginModal from "../components/loginview/LoginModal";
import SignupModal from "../components/signupview/SignupModal";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("default");
  const [showModal, setShowModal] = useState(false);
  const [showSignModal, setSignModal] = useState(false);

  const SelectKey = (value) => {
    setOpen(true);
    setSelectValue(value);
  };

  const loginview = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const Singview = () => {
    setSignModal(true);
  };

  const closeSingModal = () => {
    setSignModal(false);
  };

  return (
    <section className="sidebar">
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

        <div className="bottom" onClick={loginview}>
          <div className="icon">
            <FaUser />
            <span>로그인</span>
          </div>
        </div>
      </div>

      {/* 로그인 모달 */}
      {showModal && (
        <LoginModal
          onClose={closeModal}
          onSignupClick={() => {
            console.log("회원가입 클릭됨"); // 확인용 로그
            closeModal();
            Singview();
          }}
        />
      )}

      {/* 회원가입 모달 */}
      {showSignModal && <SignupModal onClose={closeSingModal} />}

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
    </section>
  );
}

export default Sidebar;
