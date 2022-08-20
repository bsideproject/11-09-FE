/* eslint-disable */
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import loginBg from '@/assets/icons/login_bg.svg';
import KakaoLoginBtn from '@/assets/icons/login_btn.svg';

import { kakaoApi } from '../../config';

import { loginUser } from './Login.type';
import LoginTimer from './TimerComponents/TimerComponents';

import { bottomNav, bottomNav2, kakaoLogin, loginBody } from './Login.css';

function Login() {
  const codes = new URL(window.location.href).searchParams.get('code');
  useEffect(() => {
    const loginApiCall = async () => {
      try {
        const response = await axios.post<loginUser>('https://api.timeletter.net/oauth/kakao', { code: codes });
        // const response = await axios.get<loginUser>('https://jsonplaceholder.typicode.com/posts');
        window.localStorage.setItem('token', response.data.token);
        // window.localStorage.setItem('nickNmae', `${response.data.nickname}`);
        window.sessionStorage.setItem('nickNmae', '우영우님');
        window.location.href = '/loginIntro';
      } catch (e) {
        console.log(e);
      }
    };
    if (typeof codes === 'string' && codes.length !== 0) {
      loginApiCall();
    }
  }, []);

  return (
    <div
      style={{
        background: `url(${loginBg})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
      className={loginBody}
    >
      <LoginTimer />
      <a className={kakaoLogin} href={kakaoApi.kakaoLogin}>
        <img src={KakaoLoginBtn} alt="login" />
      </a>
      <span className={bottomNav}>
        시작할 경우, 타임레터의 서비스 이용약관과 개인정보 보호정책에 동의하게 됩니다.
      </span>
      <span className={bottomNav2}>
        <Link to="/loginIntro">이용약관</Link>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <Link to="/main">개인정보 처리방침</Link>
      </span>
    </div>
  );
}

export default Login;
