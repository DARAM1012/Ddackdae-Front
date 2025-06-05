// src/components/Sidebar.jsx
import "@/components/Sidebar.css";
import logo2 from "@/assets/logo2.png";
import {
  FaSearch,
  FaBookmark,
  FaUser,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import SideOpen from "@/components/search/SideOpen.jsx";
import { useState } from "react";
import LoginModal from "@/components/loginview/LoginModal.jsx";
import SignupModal from "@/components/signupview/SignupModal.jsx";
import useSidebarStore from "@/stores/useSidebarStore";
import ReviewModal from "@/components/review/ReviewModal.jsx";
import EditUserModal from "@/components/edituserinformation/EditUserInformationModal.jsx";
import UserInformationModal from "@/components/userinformation/UserInformationModal.jsx";
import useUserLoginStore from "@/stores/UserLoginStore";

function Sidebar() {
  const { isOpen, toggleSidebar, openSidebar } = useSidebarStore();
  const isLoggedIn = useUserLoginStore((state) => state.isLoggedIn);
  const logout = useUserLoginStore((state) => state.logout);
  const [showModal, setShowModal] = useState(false);
  const [showSignModal, setSignModal] = useState(false);
  const [showReviewModal, setReviewModal] = useState(false);
  const [showEditUserModal, setEditUserModal] = useState(false);
  const [showUserInformationModal, setUserInformationModal] = useState(false);

  const loginview = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const Singview = () => setSignModal(true);
  const closeSingModal = () => setSignModal(false);
  const Review = () => setReviewModal(true);
  const closeReview = () => setReviewModal(false);
  const EditUser = () => setEditUserModal(true);
  const closeEditUserModal = () => setEditUserModal(false);
  const UserInformation = () => setUserInformationModal(true);
  const closeUserInformationModal = () => setUserInformationModal(false);

  return (
    <section className="sidebar">
      <div className="sidebarNav">
        <div className="top">
          <div className="logo" onClick={() => toggleSidebar()}>
            <img src={logo2} alt="로고" />
          </div>
          <div className="menu">
            <div className="sidebarIcon" onClick={() => openSidebar("search")}>
              <FaSearch />
              <span>검색</span>
            </div>
            <div
              className="sidebarIcon"
              onClick={() => openSidebar("favorite")}
            >
              <FaBookmark />
              <span>찜</span>
            </div>
          </div>
        </div>

        <div className="sidebarBottom">
         <div
  className="sidebarIcon"
  onClick={() => {
    if (isLoggedIn) {
      localStorage.removeItem("localToken");
      logout(); // 전역 로그인 상태 초기화
      alert("로그아웃 ㅎㅎ");
    } else {
      loginview(); // 로그인 모달 열기
    }
  }}
>
  <FaUser />
  <span>{isLoggedIn ? "로그아웃" : "로그인"}</span>
</div>
        </div>
      </div>

      {/* ── 로그인 모달 ───────────────────────────────────── */}
      {showModal && (
        <LoginModal
          onClose={closeModal}
          onSignupClick={() => {
            closeModal();
            Singview();
          }}
          reviewClick={() => {
            closeModal();
            Review();
          }}
          EditUserClick={() => {
            closeModal();
            EditUser();
          }}
          UserInformationClick={() => {
            closeModal();
            UserInformation();
          }}
        />
      )}

      {/* ── 회원가입 모달 ─────────────────────────────────── */}
      {showSignModal && <SignupModal onClose={closeSingModal} />}

      {/* ── 리뷰 모달 ─────────────────────────────────────── */}
      {showReviewModal && <ReviewModal onClose={closeReview} />}

      {/* ── 유저 에디트 모달 ───────────────────────────────── */}
      {showEditUserModal && (
        <EditUserModal
          onClose={closeEditUserModal}
          UserInformationClick={() => {
            closeEditUserModal();
            UserInformation();
          }}
        />
      )}

      {/* ── 유저 프로필 모달 ───────────────────────────────── */}
      {showUserInformationModal && (
        <UserInformationModal
          onClose={closeUserInformationModal}
          UserInformationClick={() => {
            closeUserInformationModal();
            EditUser();
          }}
        />
      )}

      {/* ── SideOpen 컴포넌트를 열고 닫는다 ─────────────────────────── */}
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
