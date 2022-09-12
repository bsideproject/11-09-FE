import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { useQuery } from '@tanstack/react-query';

import { authAPI } from '~/api';
import env from '~/config';
import { state } from '~/store';
import { setCookie } from '~/utils/cookies';
import LoginBg from '~components/assets/icons/login_bg.svg';
import { ReactComponent as Logo } from '~components/assets/icons/login_logo.svg';
import { ReactComponent as KaKaoIcon } from '~components/assets/images/kakao_icon.svg';
import LoginBorder from '~components/assets/images/login_bg_one.png';
import { Button } from '~components/index';
import { colorSystem } from '~components/styles/colors.css';
import { fontSystem } from '~components/styles/fonts.css';

import LoginTimer from './TimerComponents/TimerComponents';
import { kakaoLoginStyle, linkBottomStyle, loginBodyStyle, txtBottomStyle } from './Login.css';
import { useGetKakaoAccessToken } from './Login.hooks';

const expires = moment().add(1, 'y').toDate();

function Login() {
  const codeRef = useRef<string | null>(new URL(window.location.href).searchParams.get('code'));

  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = env.kakaoLogin;
  };

  const setUser = useSetRecoilState(state.user);
  const [accessToken, setAccessToken] = useState<string>('');
  const { data } = useQuery(
    ['authenticate', accessToken],
    () => authAPI.authenticate(accessToken),
    { enabled: !!accessToken },
  );

  // 페이지 접속시 토큰값있는지 확인 후 페이지 넘기기
  useEffect(() => {
    if (!data) {
      return;
    }

    setUser(data);
    // TODO 인트로 페이지로 넘어갈지 메인 페이지로 넘어갈지 데이터 받아와서 조건 생성
    navigate('/intro', { replace: true, state: { nickName: data.nickname || data.username } });
    setCookie('token', data.token, { path: '/', expires });
  }, [data]);

  // 로그인 시도후 code 파라미터 확인 후 getKakaoAccessToken 함수 호출
  const getKakaoAccessToken = useGetKakaoAccessToken();
  useEffect(() => {
    if (!codeRef.current) {
      return;
    }

    getKakaoAccessToken(codeRef.current).then((res) => setAccessToken(res.access_token));
    codeRef.current = null;
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
        childrenStyle={{
          color: colorSystem.black,
          fontSize: fontSystem.body.size[3],
          gap: 10,
        }}
        className={kakaoLoginStyle}
        style={{ marginTop: '60%' }}
        size="small"
        background="yellow"
        color={colorSystem.black}
        onClick={handleClick}
      >
        <KaKaoIcon />
        카카오로 5초만에 시작하기
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
