import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import env from '@/config';
import { getCookie } from '@/utils/cookies';
import { colorSystem } from '@timeletter_fe/components/src/styles/colors.css';
import { fontSystem } from '@timeletter_fe/components/src/styles/fonts.css';

import LoginBg from '~components/assets/icons/login_bg.svg';
import { ReactComponent as Logo } from '~components/assets/icons/login_logo.svg';
import { ReactComponent as KaKaoIcon } from '~components/assets/images/kakao_icon.svg';
import LoginBorder from '~components/assets/images/login_bg_one.png';
import { Button } from '~components/index';

import LoginTimer from './TimerComponents/TimerComponents';
import { kakaoLoginStyle, linkBottomStyle, loginBodyStyle, txtBottomStyle } from './Login.css';
import { kakaoAccessToken } from './Login.utils';

function Login() {
  const codes = new URL(window.location.href).searchParams.get('code') || '';
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = env.kakaoLogin;
  };

  // 페이지 접속시 토큰값있는지 확인 후 페이지 넘기기
  useEffect(() => {
    const token = getCookie('token');
    if (typeof token === 'string' && token.length !== 0) {
      navigate('/', { replace: true });
    }
  }, []);

  // 로그인 시도후 code 파라미터 확인 후 kakaoAccessToken 함수 호출
  useEffect(() => {
    if (typeof codes === 'string' && codes.length !== 0) {
      kakaoAccessToken(codes).then((result: string) => {
        if (result !== '') {
          navigate('/intro', { state: { nickName: result } });
        } else {
          // alert('카카오 로그인 실패');
        }
      });
    }
  }, []);
  return (
    <div
      style={{
        background: `url(${LoginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={loginBodyStyle}
    >
      <img style={{ position: 'absolute', maxWidth: '100%' }} src={LoginBorder} alt="img" />
      <LoginTimer />
      <Logo style={{ position: 'absolute' }} />
      <Button
        style={{
          color: colorSystem.black,
          fontSize: fontSystem.body.size[3],
          gap: 10,
          marginTop: '60%',
        }}
        className={kakaoLoginStyle}
        label="카카오로 5초만에 시작하기"
        size="small"
        iconPosition="left"
        background="yello"
        color={colorSystem.black}
        onClick={handleClick}
      >
        <KaKaoIcon />
      </Button>
      <span className={txtBottomStyle}>
        시작할 경우, 타임레터의 서비스 이용약관과
        <br />
        개인정보 보호정책에 동의하게 됩니다.
      </span>
      <span className={linkBottomStyle}>
        <Link to="/loginIntro">이용약관</Link>
        <p>|</p>
        <Link to="/main">개인정보 처리방침</Link>
      </span>
    </div>
  );
}

export default Login;
