import "./UserInformationModal.css";
import { useState } from "react";
import titlelogo from "@/assets/logo.png";
import { FaXmark } from "react-icons/fa6";
import kakaologo from "@/assets/kakao.png";
import userimage from "@/assets/samp.webp";
import buttenimage1 from "@/assets/buttenimage1.png";

function UserInformationModal({ onClose, UserInformationClick }) {
  const [userData, setUserData] = useState({
    username: "사카밤바스피스",
    useremail: "Bombardiro@kakao.com",
    userphonenumber: "011-1234-5678",
    usercarnumber: "123가 5678",
    usercar: "아스라다 / GSX",
    usercarmodel: "포도cu / 레이싱카",
    usertext: "신세기 GPX 사이버 포뮬러",
  });

  const profileattack = (e) => {
    e.preventDefault();
  };

  const exit = () => {
    alert(`탈퇴 ㅠ`);
  };
  return (
    <div className="modal-backdrop" onClick={onClose}>
      {/* <div className="modal-backdrop" onClick={onClose}> */}
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-div">
          <button className="modal-sign-close" onClick={onClose}>
            <FaXmark />
          </button>
          <div className="modal-sign-title">
            <h1>
              <img
                src={titlelogo}
                alt="titlelogo"
                className="modal-titlelogo"
              />
            </h1>
          </div>
          <div className="modal-userinfor-div">
            <div className="modal-userinfor-header-div">
              <div className="modal-profile-image-div">
                <div className="modal-userinfor-image" onClick={profileattack}>
                  <img
                    src={userimage}
                    alt="userimage"
                    className="modal-userimage"
                  />
                </div>
              </div>
              <div className="modal-userinfor-input">
                <div className="modal-userinfor-inputdiv">
                  <div className="modal-userinfor-inputdiv-line">
                    <p>{userData.username}</p>
                  </div>
                  <div>
                    <img
                      src={kakaologo}
                      alt="kakaologo"
                      className="modal-edit-oauthlogo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-userinfor-body-div">
              <div className="modal-userinfor-body-div-input">
                <p>이메일</p>
                <div className="modal-userinfor-body-div-input-div">
                  <p>{userData.useremail}</p>
                </div>
              </div>
              <div className="modal-userinfor-body-div-input">
                <p>휴대폰 번호</p>
                <div className="modal-userinfor-body-div-input-div">
                  <p>{userData.userphonenumber}</p>
                </div>
              </div>
              <div className="modal-userinfor-body-div-input">
                <p>차량번호</p>
                <div className="modal-userinfor-body-div-input-div">
                  <p>{userData.usercarnumber}</p>
                </div>
              </div>
              <div className="modal-userinfor-body-div-input">
                <p>제조사 / 차량</p>
                <div className="modal-userinfor-body-div-input-div">
                  <p>{userData.usercar}</p>
                </div>
              </div>
              <div className="modal-userinfor-body-div-input">
                <p>연료 / 모델</p>
                <div className="modal-userinfor-body-div-input-div">
                  <p>{userData.usercarmodel}</p>
                </div>
              </div>
              <div className="modal-userinfor-body-div-input">
                <p>자기소개</p>
                <div className="modal-userinfor-body-div-input-div">
                  <p>{userData.usertext}</p>
                </div>
              </div>
            </div>
            {/* 버튼칸 */}
            <div className="modal-userinfor-buttendiv">
              <div className="modal-userinfor-buttendiv-text" onClick={exit}>
                <p>탈퇴하기</p>
              </div>
              <div
                className="modal-userinfor-butten"
                onClick={UserInformationClick}
              >
                <img
                  src={buttenimage1}
                  alt="buttenimage1"
                  className="modal-userinfor-butten-image"
                />
                <p>수정</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformationModal;
