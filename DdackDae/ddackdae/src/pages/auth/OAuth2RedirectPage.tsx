import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OAuth2RedirectPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      // 토큰을 로컬 스토리지 등에 저장
      localStorage.setItem('localToken', token);
      localStorage.setItem("SocialToken", token);
console.log(token)
      // 로그인 상태 관리 스토어가 있다면 여기서 로그인 상태 업데이트
      // 예: setLogin(true);

      // 로그인 완료 후 홈 화면 등으로 이동
      navigate("/");
    } else {
      // 토큰이 없으면 로그인 실패 처리 또는 로그인 페이지로 이동
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      navigate("/login"); // 로그인 페이지가 있다면
    }
  }, [navigate, searchParams]);

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h2>로그인 중...</h2>
      <p>잠시만 기다려주세요.</p>
    </div>
  );
};

export default OAuth2RedirectPage;
