import "./EditUserInformationModal.css";
import { useState } from "react";
import titlelogo from "@/assets/logo.png";
import { FaXmark } from "react-icons/fa6";
import kakaologo from "@/assets/kakao.png";
import userimage from "@/assets/samp.webp";

function EditUserModal({ onClose, UserInformationClick }) {
  const [userData, setUserData] = useState({
    username: "사카밤바스피스",
    useremail: "Bombardiro@kakao.com",
    userphonenumber: "011-1234-5678",
    usercarnumber: "123가 5678",
  });
  const [userImagePreview, setUserImagePreview] = useState(userimage);

  const profileattack = (e) => {
    e.preventDefault();
  };

  const editcomplete = () => {
    alert(`트랄라레로 트랄랄라\n🦈👟👟👟`);
  };

  return (
    <div className="modal-backdrop">
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
          <div className="modal-edit-div">
            <div className="modal-profile-header-div">
              <div className="modal-profile-image-div">
                <div className="modal-profile-image" onClick={profileattack}>
                  <img
                    src={userImagePreview}
                    alt="userimage"
                    className="modal-userimage"
                    onClick={() =>
                      document.getElementById("profile-upload").click()
                    }
                  />
                </div>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const previewURL = URL.createObjectURL(file);
                      setUserImagePreview(previewURL);
                    }
                  }}
                />
              </div>
              <div className="modal-profile-input">
                <p>닉네임</p>
                <div className="modal-profile-inputdiv">
                  <input
                    type="text"
                    placeholder="2~8자/문자, 숫자 사용 가능"
                    value={userData.username}
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                  />
                  <img
                    src={kakaologo}
                    alt="kakaologo"
                    className="modal-edit-oauthlogo"
                  />
                </div>
              </div>
            </div>
            <div className="modal-sign-body-div">
              <div className="madal-sign-body-div-input">
                <p>이메일</p>
                <input
                  type="text"
                  placeholder="8~16자 / 문자,숫자,특수 문자 모두 포함"
                  value={userData.useremail}
                  onChange={(e) =>
                    setUserData({ ...userData, useremail: e.target.value })
                  }
                />
              </div>
              <div className="madal-sign-body-div-input">
                <p>휴대폰 번호</p>
                <input
                  type="text"
                  placeholder="'-'제외, 숫자만 입력해주세요."
                  value={userData.userphonenumber}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      userphonenumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="madal-sign-body-div-input">
                <p>차량번호</p>
                <input
                  type="text"
                  placeholder="차량번호 전체 입력해주세요."
                  value={userData.usercarnumber}
                  onChange={(e) =>
                    setUserData({ ...userData, usercarnumber: e.target.value })
                  }
                />
              </div>
              {/* 드롭박스창 */}
              <div className="modal-sign-select-row">
                <div className="madal-sign-body-div-select">
                  <p>자동차 제조사</p>
                  <select className="modal-sign-dropdown">
                    <option value="" disabled selected>
                      선택하세요
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="madal-sign-body-div-select">
                  <p>차량</p>
                  <select className="modal-sign-dropdown2">
                    <option value="" disabled selected>
                      선택하세요
                    </option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>

              <div className="modal-sign-select-row">
                <div className="madal-sign-body-div-select">
                  <p>연료타입</p>
                  <select className="modal-sign-dropdown">
                    <option value="" disabled selected>
                      선택하세요
                    </option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>

                <div className="madal-sign-body-div-select">
                  <p>모델</p>
                  <select className="modal-sign-dropdown2">
                    <option value="" disabled selected>
                      선택하세요
                    </option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
            {/* 버튼칸 */}
            <div className="modal-edit-buttendiv">
              <div
                className="modal-edit-butten1"
                onClick={UserInformationClick}
              >
                <p>수정 취소</p>
              </div>
              <div className="modal-edit-butten2" onClick={editcomplete}>
                <p>저장</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserModal;
