import "./LoginModal.css";
import { useState } from "react";
import titlelogo from "../../assets/logo2.png";
import googlelogo from "../../assets/google.png";
import kakaologo from "../../assets/kakao.png";
import naverlogo from "../../assets/naver.png";
function LoginModal({ onClose, onSignupClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`로그인 시도\n\nemail : ${email}\n비밀번호 : ${password}`);
    // onClose()
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-login-close" onClick={onClose}>
          X
        </button>
        <div className="modal-login-title">
          <h1>
            <img src={titlelogo} alt="titlelogo" className="modal-titlelogo" />
            딱대
          </h1>
        </div>
        <div className="modal-subtitle">
          <h2>로그인</h2>
        </div>
        <div className="modal-subtext">
          <p>소셜아이디로 1초 만에 로그인 하세요.</p>
        </div>
        <div className="modal-login-div1">
          <img
            src={kakaologo}
            alt="kakaologo"
            className="modal-login-div-logo"
          />
          <p>카카오로 로그인/회원가입</p>
        </div>
        <div className="modal-login-div2">
          <img
            src={googlelogo}
            alt="googlelogo"
            className="modal-login-div-logo"
          />
          <p>구글로 로그인/회원가입</p>
        </div>
        <div className="modal-login-div3">
          <img
            src={naverlogo}
            alt="naverlogo"
            className="modal-login-div-logo"
          />
          <p>네이버로 로그인/회원가입</p>
        </div>

        <div className="centered-line-div">
          <span className="centered-line-div-text">또는</span>
        </div>
        <div className="form-div">
          <form action="">
            <input
              className="form-div-input1"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              className="form-div-input2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
          </form>
        </div>
        <div className="login-butten" onClick={handleSubmit}>
          <p>로그인</p>
        </div>
        <div className="signup-butten" onClick={onSignupClick}>
          <p>회원가입</p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
