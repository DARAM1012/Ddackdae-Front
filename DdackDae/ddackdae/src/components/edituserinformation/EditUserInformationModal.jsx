import "./EditUserInformationModal.css";
import { useState, useEffect } from "react";
import titlelogo from "@/assets/logo.png";
import { FaXmark } from "react-icons/fa6";
import kakaologo from "@/assets/kakao.png";
import userimage from "@/assets/defaultimage.png";
import { UserDtailGetApi, UserDtailUpdateApi } from "@/api/UserdetailApi"; 

function EditUserModal({ onClose, UserInformationClick }) {
  
    const [userData, setUserData] = useState({
    username: "",
    useremail: "",
    userphonenumber: "",
    usercarnumber: "",
    usercar: "",
    usercarmodel: "",
    usertext: "",
    profileImageUrl: "",
    manuCompany: "",
    custCarKind: "",
    fuelType: "",
    carModel: "",
  });

   const manuCompanylist = [
    { label: "선택하세요", value: "", disabled: true },
    { label: "HYUNDAI", value: "HYUNDAI" },
    { label: "TOYOTA", value: "TOYOTA" },
    { label: "HYUNDAIRotem", value: "HYUNDAIRotem" },
  ];

  const custCarKindlist = {
    HYUNDAI: [
      { label: "SONATA", value: "SONATA" },
      { label: "PALISADE", value: "PALISADE" },
    ],
    TOYOTA: [
      { label: "CAMRY", value: "CAMRY" },
      { label: "RAV4", value: "RAV4" },
    ],
    HYUNDAIRotem: [
      { label: "UTM-03", value: "UTM-03" },
      { label: "K-2BlackPanther", value: "K-2BlackPanther" },
    ],
  };

  const fuelTypelist = [
    { label: "선택하세요", value: "", disabled: true },
    { label: "휘발유", value: "Gasoline" },
    { label: "경유(디젤)", value: "Diesel" },
    { label: "EV", value: "EV" },
    { label: "HEV", value: "HEV" },
    { label: "PHEV", value: "PHEV" },
    { label: "FCEV", value: "FCEV" },
  ];

  const carModel = [
    // { label: "선택하세요", value: "", disabled: true },
    { label: "경차", value: "경차" },
    { label: "소형차", value: "소형차" },
    { label: "준형차", value: "준형차" },
    { label: "대형차", value: "대형차" },
    { label: "전차", value: "전차" },
    { label: "열차", value: "열차" },
  ];


  const [userImagePreview, setUserImagePreview] = useState(userimage);

  const profileattack = (e) => {
    e.preventDefault();
  };

  const editcomplete = async () => {
  const token = localStorage.getItem("localToken");

  if (!token) {
    alert("로그인 정보가 없습니다. 다시 로그인 해주세요.");
    return;
  }

  const formData = new FormData();

  // 수정된 데이터 추가 (텍스트 데이터)
  formData.append("customerUpdateRequestDto", JSON.stringify({
    nickName: userData.username,
    phone: userData.userphonenumber,
    carNumber: userData.usercarnumber,
    carKnd: userData.custCarKind,
    manuCompany: userData.manuCompany,
    fuelType: userData.fuelType,
    carModel: userData.carModel
  }));

  // 이미지 파일 추가 (있을 경우)
  if (userImagePreview && userImagePreview !== userimage) {
    const profileImage = document.getElementById("profile-upload").files[0];
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }
  }

  try {
    // API 호출
    const res = await UserDtailUpdateApi(token, formData); // formData를 API로 전송
    if (res.status === 200) {
      alert("사용자 정보가 성공적으로 업데이트되었습니다.");
      onClose(); // 모달 닫기
    } else {
      alert("정보 업데이트에 실패했습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    console.error("사용자 정보 업데이트 실패:", error);
    alert("정보 업데이트 중 오류가 발생했습니다.");
  }
};

  useEffect(() => {
    const getuser = async () => {
      const token = localStorage.getItem("localToken");

  try {
        if (token) {
          const res = await UserDtailGetApi(token);
          setUserData({
            username: res.nickName,
            useremail: res.email,
            userphonenumber: res.phone,
            usercarnumber: res.carNumber,
            usertext: res.usertext || "",
            profileImageUrl: res.profileImageUrl,
            manuCompany: res.manuCompany,
            custCarKind: res.carKnd,
            fuelType: res.fuelType,
            carModel: res.carModel,
          });
          setUserImagePreview(res.profileImageUrl || userimage); // 프로필 이미지 미리보기 설정
        }
      } catch (e) {
        console.error("유저 정보 불러오기 실패:", e);
      }
    };
    getuser();
  }, []);
  
  return (
    <div className="modal-backdrop">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-div">
          <button className="modal-sign-close" onClick={onClose}>
            <FaXmark />
          </button>
          <div className="modal-sign-title">
            <h1>
              <img src={titlelogo} alt="titlelogo" className="modal-titlelogo" />
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
                    onClick={() => document.getElementById("profile-upload").click()}
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
                  placeholder="8~50자 / 문자,숫자,특수 문자 모두 포함"
                  value={userData.useremail}
                  onChange={(e) =>
                    setUserData({ ...userData, useremail: e.target.value })
                  }
                  readOnly
                />
              </div>
              <div className="madal-sign-body-div-input">
                <p>휴대폰 번호</p>
                <input
                  type="text"
                  placeholder="'-'제외, 숫자만 입력해주세요."
                  value={userData.userphonenumber}
                  onChange={(e) =>
                    setUserData({ ...userData, userphonenumber: e.target.value })
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

              {/* 자동차 제조사, 차량, 연료 타입, 모델 드롭다운 */}
              <div className="modal-sign-select-row">
                <div className="madal-sign-body-div-select">
                  <p>자동차 제조사(선택)</p>
                  <select
                    className="modal-sign-dropdown"
                    value={userData.manuCompany}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        manuCompany: e.target.value,
                        custCarKind: "", // 제조사 변경시 차량 종류 초기화
                      })
                    }
                  >
                    {manuCompanylist.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.disabled}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="madal-sign-body-div-select">
                  <p>차량(선택)</p>
                  <select
                    className="modal-sign-dropdown2"
                    value={userData.custCarKind}
                    onChange={(e) =>
                      setUserData({ ...userData, custCarKind: e.target.value })
                    }
                  >
                    <option value="" disabled selected>
                      선택하세요
                    </option>
                    {(custCarKindlist[userData.manuCompany] || []).map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-sign-select-row">
                <div className="madal-sign-body-div-select">
                  <p>연료타입(선택)</p>
                  <select
                    className="modal-sign-dropdown"
                    value={userData.fuelType}
                    onChange={(e) =>
                      setUserData({ ...userData, fuelType: e.target.value })
                    }
                  >
                    {fuelTypelist.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="madal-sign-body-div-select">
                  <p>모델(선택)</p>
                  <select
                    className="modal-sign-dropdown2"
                    value={userData.carModel}
                    onChange={(e) =>
                      setUserData({ ...userData, carModel: e.target.value })
                    }
                  >
                    <option value="" disabled selected>
                      선택하세요
                    </option>
                    {carModel.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
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