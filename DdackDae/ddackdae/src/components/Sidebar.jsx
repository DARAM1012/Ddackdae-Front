import "@/components/Sidebar.css";
import logo2 from "@/assets/logo2.png";
import {
  FaSearch,
  FaBookmark,
  FaUser,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import SideOpen from "../components/search/SideOpen.jsx";
import { useState } from "react";
import LoginModal from "@/components/loginview/LoginModal.jsx";
import SignupModal from "@/components/signupview/SignupModal.jsx";
import useSidebarStore from "@/stores/useSidebarStore.js";

function Sidebar() {
  const { isOpen, toggleSidebar, openSidebar} =
    useSidebarStore();
  const [showModal, setShowModal] = useState(false);
  const [showSignModal, setSignModal] = useState(false);


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
          <div className="logo" onClick={() => toggleSidebar()}>
            <img src={logo2} alt="로고" />
          </div>
          <div className="menu">
            <div className="sidebarIcon" onClick={() => openSidebar('search')}>
              <FaSearch />
              <span>검색</span>
            </div>
            <div className="sidebarIcon" onClick={() => openSidebar('favorite')}>
              <FaBookmark />
              <span>찜</span>
            </div>
          </div>
        </div>

        <div className="sidebarBottom" onClick={loginview}>
          <div className="sidebarIcon">
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

      <div className={`sideOpen ${isOpen ? "open" : "closed"}`}>
        <SideOpen />
      </div>
      <div
        className={`SideOpenAndCloseBtnBox ${isOpen && "open"}`}
        onClick={() => toggleSidebar()}
      >
        {!isOpen && <FaChevronRight className="SideOpenAndCloseBtn OpenBtn" />}
        {isOpen && <FaChevronLeft className="SideOpenAndCloseBtn CloseBtn" />}
      </div>
    </section>
  );
}

export default Sidebar;
