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
import ReviewModal from "@/components/review/ReviewModal.jsx"
import EditUserModal from "@/components/edituserinformation/EditUserInformationModal.jsx";
import UserInformationModal from "@/components/userinformation/UserInformationModal.jsx";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("default");
  const [showModal, setShowModal] = useState(false);
  const [showSignModal, setSignModal] = useState(false);
  const [showReviewModal, setReviewModal] = useState(false);
  const [showEditUserModal, setEditUserModal] = useState(false);
  const [showUserInformationModal, setUserInformationModal ] = useState(false);

  const handleBodySelect = (newKey) => {
    setSelectValue(newKey || "default");
  };

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

  const Review = () => {
    setReviewModal(true);
  };

  const closeReview = () => {
    setReviewModal(false);
  };

  const EditUser = () => {
    setEditUserModal(true);
  }

  const closeEditUserModal = () => {
    setEditUserModal(false);
  }

  const UserInformation = () => {
    setUserInformationModal(true);
  }

  const closeUserInformationModal = () => {
    setUserInformationModal(false);
  }

  return (
    <section className="sidebar">
      <div className="sidebarNav">
        <div className="top">
          <div className="logo" onClick={() => SelectKey("default")}>
            <img src={logo2} alt="로고" />
          </div>
          <div className="menu">
            <div className="sidebarIcon" onClick={() => SelectKey("search")}>
              <FaSearch />
              <span>검색</span>
            </div>
            <div className="sidebarIcon" onClick={() => SelectKey("favorite")}>
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
          reviewClick={() => {
            closeModal();
            Review();}}

            EditUserClick={() => {
              closeModal();
              EditUser();}}

              UserInformationClick={() => {
                closeModal();
                UserInformation();}}
        />
      )}

  )
      {/* 회원가입 모달 */}
      {showSignModal && <SignupModal onClose={closeSingModal} />}

      {/* 리뷰 모달 */}
      {showReviewModal && <ReviewModal onClose={closeReview} />}

      {/* 유저 에디트 모달 */}
      {showEditUserModal && <EditUserModal onClose={closeEditUserModal} />}

      {/* 유저 프로필 모달 */}
      {showUserInformationModal && <UserInformationModal onClose={closeUserInformationModal} />}

      <div className={`sideOpen ${open ? "open" : "closed"}`}>
        <SideOpen
          selectValue={selectValue}
          onChangeSelectValue={handleBodySelect}
        />
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
