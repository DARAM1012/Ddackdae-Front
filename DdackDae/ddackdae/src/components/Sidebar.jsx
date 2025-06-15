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
import { useState, useEffect } from "react";
import LoginModal from "@/components/loginview/LoginModal.jsx";
import SignupModal from "@/components/signupview/SignupModal.jsx";
import useSidebarStore from "@/stores/useSidebarStore.js";
import EditUserModal from "@/components/edituserinformation/EditUserInformationModal.jsx";
import UserInformationModal from "@/components/userinformation/UserInformationModal.jsx";
import useUserLoginStore from "@/stores/UserLoginStore";
import { LoginCustomerGetApi } from "../api/LoginApi.jsx";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import useFavoriteStore from "@/stores/useFavoriteStore.js";
import { UserDtailGetApi } from "@/api/UserdetailApi";

function Sidebar() {
  const { isOpen, toggleSidebar, openSidebar } = useSidebarStore();
  const isLoggedIn = useUserLoginStore((state) => state.isLoggedIn);
  const logout = useUserLoginStore((state) => state.logout);
  const [showModal, setShowModal] = useState(false);
  const [showSignModal, setSignModal] = useState(false);
  const [showEditUserModal, setEditUserModal] = useState(false);
  const [showUserInformationModal, setUserInformationModal] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState(null);
  const { setFavoritesListDelete } = useFavoriteStore();

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

  const EditUser = () => {
    setEditUserModal(true);
  };

  const closeEditUserModal = () => {
    setEditUserModal(false);
  };

  const UserInformation = () => {
    setUserInformationModal(true);
  };

  const closeUserInformationModal = () => {
    setUserInformationModal(false);
  };
  useEffect(() => {
    const GetUserImage = async () => {
      const token =
        localStorage.getItem("localToken");
      if (!token) return;

      try {
        const data = await LoginCustomerGetApi(token);
        setUserProfileImage(data.profileImageUrl);
      } catch (err) {
        console.error("유저 정보 불러오기 실패:", err);
      }

      try {
        const res = await UserDtailGetApi(token);

        if (localStorage.getItem("SocialToken") && res.email === null) {
          alert("회원정보를 추가입력 바랍니다.");
           EditUser()
        }
      } catch (e) {
        console.log(e);
      }
    };

    GetUserImage();
  }, []); // 최초 렌더링 시 한 번 실행

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
          {/* 로그인, 로그아웃 버튼 */}
          <div className="sidebarIcon">
            {/* 로그인 상태 */}
            {isLoggedIn ? (
              <>
                <div
                  className="userCircle"
                  onClick={UserInformation}
                  style={{
                    backgroundImage: `url(${userProfileImage || ""})`,
                  }}
                />
                <span
                  onClick={() => {
                    confirmAlert({
                      title: "로그아웃 체크",
                      message: "로그아웃 하시겠습니까??",
                      buttons: [
                        {
                          label: "네",
                          onClick: () => {
                            localStorage.removeItem("localToken");
                            localStorage.removeItem("SocialToken");
                            logout();
                            window.location.reload();
                          },
                        },
                        {
                          label: "아니요",
                          onClick: () => {},
                        },
                      ],
                    });
                  }}
                >
                  로그아웃
                </span>
              </>
            ) : (
              <div className="sidebarIconlogindiv" onClick={loginview}>
                <div>
                  <FaUser />
                </div>
                <span>로그인</span>
              </div>
            )}
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

      {/* 유저 에디트 모달 */}
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
