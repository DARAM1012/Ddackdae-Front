import "./UserInformationModal.css";
import { useState, useEffect } from "react";
import titlelogo from "@/assets/logo.png";
import { FaXmark } from "react-icons/fa6";
import kakaologo from "@/assets/kakao.png";
import userimage from "@/assets/defaultimage.png";
import buttenimage1 from "@/assets/buttenimage1.png";
import { UserDtailGetApi } from "@/api/UserdetailApi";

function UserInformationModal({ onClose, UserInformationClick }) {
  const [userData, setUserData] = useState({
    username: "",
    useremail: "",
    userphonenumber: "",
    usercarnumber: "",
    usercar: "",
    usercarmodel: "",
    usertext: "",
    profileImageUrl: "",
  });

  // 전화번호 포맷팅 함수
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return ""; // 만약 전화번호가 없다면 빈 문자열 반환
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  };

  const profileattack = (e) => {
    e.preventDefault();
  };

  const exit = () => {
    alert(`탈퇴`);
  };

  useEffect(() => {
    const getuser = async () => {
      const token = localStorage.getItem("localToken");

      if (token) {
        try {
          const res = await UserDtailGetApi(token);

          setUserData({
            username: res.nickName,
            useremail: res.email,
            userphonenumber: formatPhoneNumber(res.phone),
            usercarnumber: res.carNumber,
            usercar: res.manuCompany + " / " + res.carKnd,
            usercarmodel: res.fuelType + " / " + res.carModel,
            usertext: res.usertext || "", // usertext가 없다면 빈 문자열
            profileImageUrl: res.profileImageUrl, // 이미지 URL 저장
          });
        } catch (e) {
          throw e;
        }
      }
    };
    getuser();
  }, []);

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
                    src={userData.profileImageUrl || userimage} // URL이 없으면 기본 이미지로 대체
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
