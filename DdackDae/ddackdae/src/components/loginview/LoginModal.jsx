import "@/components/loginview/LoginModal.css";
import { useState } from "react";
import titlelogo from "@/assets/logo.png";
import googlelogo from "@/assets/google.png";
import kakaologo from "@/assets/kakao.png";
import naverlogo from "@/assets/naver.png";
import { FaXmark } from "react-icons/fa6";
import { LocalloginPostApi } from "@/api/LoginApi";
import useUserLoginStore from "@/stores/UserLoginStore";

function LoginModal({
  onClose,
  onSignupClick,
  // reviewClick,
  // UserInformationClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setLogin = useUserLoginStore((state) => state.setLogin);

  const handleKakaoLogin = () => {
  // 카카오 로그인 URL로 리다이렉트
  window.location.href = "http://ddak-dae.kro.kr/oauth2/authorization/kakao";
};

  const handleSubmit = async (e) => {
    e.preventDefault();
   
     if(!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const data = { email, password };
      const res = await LocalloginPostApi(data);
      console.log(res); // 토큰 등 응답 확인
      const token = localStorage.setItem("localToken", res.token);
      setLogin(token);
    //   alert(
    //   "╬═╬\n╬═╬\n╬═╬\n╬═╬\n╬═╬  로그인\n╬═╬　성공!\n╬═╬\n╬═╬　　∧__∧\n╬═╬　┗(･ω･｀)┛\n╬═╬　　┏ ┛\n"
    // );
      onClose();
    } catch (error) {
      alert("존재하지 않는 계정 입니다.");
    }

  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-login-close" onClick={onClose}>
          <FaXmark />
        </button>
        <div className="modal-login-title">
          <h1>
            <img src={titlelogo} alt="titlelogo" className="modal-titlelogo" />
          </h1>
        </div>
        <div className="modal-subtitle">
          <h2>로그인</h2>
        </div>
        <div className="modal-subtext">
          <p>소셜아이디로 1초 만에 로그인 하세요.</p>
        </div>
        <div className="modal-login-div1" onClick={handleKakaoLogin}>
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
          <form onSubmit={handleSubmit}>
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
            <button type="submit" style={{ display: "none" }}>submit</button> 
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
