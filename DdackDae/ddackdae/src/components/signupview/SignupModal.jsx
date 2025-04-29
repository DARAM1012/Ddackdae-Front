import "./SignupModal.css";
import { useState } from "react";
import titlelogo from "@/assets/logo.png";
import {FaXmark} from "react-icons/fa6";

function SignupModal({ onClose }) {
  const profileattack = (e) => {
    e.preventDefault();
    alert(`프사`);
  };
  const signcomplete = () => {
    alert(
      "╬═╬\n╬═╬\n╬═╬\n╬═╬\n╬═╬  먼저\n╬═╬　퇴근할게요!\n╬═╬\n╬═╬　　∧__∧\n╬═╬　┗(･ω･｀)┛\n╬═╬　　┏ ┛\n"
    );
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
                  onClick={profileattack}
                ></div>
              </div>
              <div className="modal-profile-input">
                <p>닉네임</p>
                <input type="text" placeholder="2~8자/문자, 숫자 사용 가능" />
              </div>
            </div>
            <div className="modal-sign-body-div">
              <div className="madal-sign-body-div-input">
                <p>이메일</p>
                <input
                  type="text"
                  placeholder="8~16자 / 문자,숫자,특수 문자 모두 포함"
                />
              </div>
              <div className="madal-sign-body-div-input">
                <p>휴대폰 번호</p>
                <input
                  type="text"
                  placeholder="'-'제외, 숫자만 입력해주세요."
                />
              </div>
              <div className="madal-sign-body-div-input">
                <p>차량번호(선택)</p>
                <input type="text" placeholder="차량번호 전체 입력해주세요." />
              </div>
              {/* 드롭박스창 */}
              <div className="modal-sign-select-row">
                <div className="madal-sign-body-div-select">
                  <p>자동차 제조사(선택)</p>
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
                  <p>차량(선택)</p>
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
                  <p>연료타입(선택)</p>
                  <select className="modal-sign-dropdown">
                    <option value="" disabled selected>
                      선택하세요
                    </option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>

                <div className="madal-sign-body-div-select">
                  <p>모델(선택)</p>
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
            {/* 약관동의 div */}
            <div className="modal-sign-checklist-div">
              <h4>가입 약관 동의</h4>
              <ul className="modal-sign-checklist-list">
                <li className="checklist-item">
                  <input type="checkbox" />
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
                  <input type="checkbox" />
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
