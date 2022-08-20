/* eslint-disable */
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as LoginBg } from '@/assets/icons/login_bg.svg';
import KakaoLoginBtn from '@/assets/icons/login_btn.svg';

import { kakaoApi } from '../../config';
import { setCookie } from '../../cookie';

import LoginTimer from './TimerComponents/TimerComponents';

import { bottomNav, bottomNav2, kakaoLogin, loginBody } from './Login.css';

function Login() {
  const codes = new URL(window.location.href).searchParams.get('code') || '';
  const navigate = useNavigate();
  useEffect(() => {
    const loginApiCall = async () => {
      try {
        // const response = await axios.post<loginUser>('https://api.timeletter.net/oauth/kakao', { code: codes });
        console.log('oeuouoeuouo');
        const expires = new Date();
        expires.setMonth(expires.getMonth() + 1)
        setCookie('token', codes, { path: '/', expires });
        // window.localStorage.setItem('nickNmae', `${response.data.nickname}`);
        window.sessionStorage.setItem('nickNmae', '우영우님');
        navigate('/intro', { replace: true });
      } catch (e) {
        console.log(e);
      }
    };
    if (typeof codes === 'string' && codes.length !== 0) {
      loginApiCall();
    }
  }, []);

  return (
    <div className={loginBody}>
      <LoginBg />
      <LoginTimer />
      <a className={kakaoLogin} href={kakaoApi.kakaoLogin}>
        {/* <Button
          style={{ color: vars.colors.black, background: vars.colors.yello }}
          label="카카오로 시작하기"
          size="small"
          variant="solid"
          iconPosition="left"
        ><KakaoIcon style={{ right: 10 }} /></Button> */}
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
