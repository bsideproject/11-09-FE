import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
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
    if (data.tutorialYN){
      navigate('/intro', { replace: true, state: { nickName: data.nickname || data.username } });
    } else {
      navigate('/', { replace: true });
    }
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
        <a
          href={`${env.noctionURL}98b4fa790e0f4563a08189679fc91d5e#1324a9245b87421a84aff6b8357f72c8`}
        >
          사업자 정보확인
        </a>
        <p>|</p>
        <a href={`${env.noctionURL}91772865c97d43e68101a5486e229e4d`}>이용약관</a>
        <p>|</p>
        <a href={`${env.noctionURL}f964912552da433c8ac2e7611549ecdf`}>개인정보 처리방침</a>
      </span>
    </div>
  );
}

export default Login;
