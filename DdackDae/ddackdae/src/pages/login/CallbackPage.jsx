
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Next.js면 useRouter 사용
import { useAuthStore } from '@/stores/authStore'; // Zustand 예시

const LoginCallback = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate(); // 또는 next/router의 useRouter()
  const setToken = useAuthStore((state) => state.setToken); // 상태 저장 예시

  useEffect(() => {
    if (token) {
      // 1. 토큰 로컬스토리지에 저장
      localStorage.setItem('localToken', token);
      localStorage.setItem('SocialToken', token);
      setToken(token); // Zustand, Recoil 등 사용 시

      // 2. 유저 정보 불러오기 or 홈으로 리디렉션
      navigate('/'); // 또는 라우터 푸시
    } else {
      // 토큰 없을 경우 에러 처리
      console.error('No token in callback URL');
    }
  }, [token]);

  return <div>로그인 중입니다...</div>;
};

export default LoginCallback;
