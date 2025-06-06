import "./SignupModal.css";
import { useState } from "react";
import titlelogo from "@/assets/logo.png";
import defaultimage from "../../assets/defaultimage.png";
import { FaXmark } from "react-icons/fa6";
import { SignupPostApi } from "@/api/SignupApi";

function SignupModal({ onClose }) {

  const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //회원가입 정보
  const [userData, setUserData] = useState({
    nickName: "",
    email: "",
    password: "",
    phone: "",
    custCarNumber: "",
    manuCompany: "",
    custCarKind: "",
    fuelType: "",
    carModel: "",
  });

  //디폴트 이미지
  const [userimg, setUserImg] = useState({
    userimage: defaultimage,
  });

  // 미리보기 이미지
  const [previewImg, setPreviewImg] = useState(null);

  // 회원가입 이미지
  const [imageFile, setImageFile] = useState(null);

  //체크박스 필수
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

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
    { label: "선택하세요", value: "", disabled: true },
    { label: "경차", value: "경차" },
    { label: "소형차", value: "소형차" },
    { label: "준형차", value: "준형차" },
    { label: "대형차", value: "대형차" },
    { label: "전차", value: "전차" },
    { label: "열차", value: "열차" },
  ];



  const signcomplete = async() => {
    // alert(
    //   "╬═╬\n╬═╬\n╬═╬\n╬═╬\n╬═╬  먼저\n╬═╬　퇴근할게요!\n╬═╬\n╬═╬　　∧__∧\n╬═╬　┗(･ω･｀)┛\n╬═╬　　┏ ┛\n"
    // );
    if (!check1 || !check2) {
      alert("필수 항목을 모두 체크해 주세요.");
      return;
    }

      if (userData.nickName.length > 8) {
    alert("닉네임은 8자 이하로 입력해 주세요.");
    return;
  }

 
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharRegex.test(userData.password)) {
    alert("비밀번호에 특수문자를 최소 1개 포함해야 합니다.");
    return;
  }

const phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(userData.phone)) {
    alert("휴대폰 번호는 숫자만 입력해 주세요.");
    return;
  }

  if (!strictEmailRegex.test(userData.email)) {
  alert("유효한 이메일 주소를 입력해 주세요.");
  return;
}

    try {
    const res = await SignupPostApi(userData, imageFile);
    alert("회원가입이 완료되었습니다!");
    onClose();
  } catch (error) {
    alert(`회원가입에 실패했습니다. ${error}`);
  }
    

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
          <div className="modal-subdiv">
            <div className="modal-profile-header-div">
              <div className="modal-profile-image-div">
            <div
  className="modal-profile-image"
  onClick={() => document.getElementById("profile-upload").click()}
>
  <input
    id="profile-upload"
    type="file"
    accept="image/*"
    style={{ display: "none" }}
    onChange={(e) => {
  const file = e.target.files[0];
  if (file) {
    const previewURL = URL.createObjectURL(file);
    setPreviewImg(previewURL);      // 여기에만 미리보기 저장
    setImageFile(file);             // 실제 전송용 파일도 저장
  }
}}
  />

  <img
    src={userimg.userimage}
    alt="defaultimage"
    className="modal-defaultimage"
  />
  {previewImg && (
    <img
      src={previewImg}
      alt="preview"
      className="modal-preview-image"
    />
  )}
</div>
              </div>
              <div className="modal-profile-input">
                <p>닉네임</p>
                <div className="modal-profile-inputdiv">
                  <input
                    type="text"
                    placeholder="2~8자/문자, 숫자 사용 가능"
                    value={userData.nickName}
                    onChange={(e) =>
                      setUserData({ ...userData, nickName: e.target.value })
                    }
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
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
              <div className="madal-sign-body-div-input">
                <p>비밀번호</p>
                <input
                  type="password"
                  placeholder="8~16자 / 문자,숫자,특수 문자 모두 포함"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>
              <div className="madal-sign-body-div-input">
                <p>휴대폰 번호</p>
                <input
                  type="text"
                  placeholder="'-'제외, 숫자만 입력해주세요."
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="madal-sign-body-div-input">
                <p>차량번호(선택)</p>
                <input
                  type="text"
                  placeholder="차량번호 전체 입력해주세요."
                  value={userData.custCarNumber}
                  onChange={(e) =>
                    setUserData({ ...userData, custCarNumber: e.target.value })
                  }
                />
              </div>
              {/* 드롭박스창 */}
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
                        custCarKind: "",
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
                    {(custCarKindlist[userData.manuCompany] || []).map(
                      (opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      )
                    )}
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
              </div>
            </div>
            {/* 약관동의 div */}
            <div className="modal-sign-checklist-div">
              <h4>가입 약관 동의</h4>
              <ul className="modal-sign-checklist-list">
                <li className="checklist-item">
                  <input
                    type="checkbox"
                    checked={check1}
                    onChange={(e) => setCheck1(e.target.checked)}
                  />
                  딱대 이용 약관에 동의합니다.
                  <span
                    style={{
                      color: "(필수)" === "(필수)" ? "#1D7FFF" : "#B8B8B8",
                    }}
                  >
                    (필수)
                  </span>
                  <span className="check-detail">상세보기▼</span>
                </li>

                <li className="checklist-item">
                  <input
                    type="checkbox"
                    checked={check2}
                    onChange={(e) => setCheck2(e.target.checked)}
                  />
                  개인정보 수집 및 이용에 동의합니다.
                  <span
                    style={{
                      color: "(필수)" === "(필수)" ? "#1D7FFF" : "#B8B8B8",
                    }}
                  >
                    (필수)
                  </span>
                  <span className="check-detail">상세보기▼</span>
                </li>

                <li className="checklist-item">
                  <input type="checkbox" />
                  마케팅 활용 및 광고성 정보 수신에 동의합니다.
                  <span
                    style={{
                      color: "(필수)" === "(선택)" ? "#1D7FFF" : "#B8B8B8",
                    }}
                  >
                    (선택)
                  </span>
                  <span className="check-detail">상세보기▼</span>
                </li>
              </ul>
            </div>

            {/* 가입완료 버튼 */}
            <div className="signup-complete-butten" onClick={signcomplete}>
              <p>가입완료</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
