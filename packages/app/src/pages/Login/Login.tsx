// /* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { useSetRecoilState } from 'recoil';

import { useQuery } from '@tanstack/react-query';

import { authAPI } from '~/api';
import env from '~/config';
import { state } from '~/store';
import { setCookie } from '~/utils/cookies';
import { ReactComponent as Logo } from '~components/assets/icons/login_logo.svg';
import { ReactComponent as Bg1 } from '~components/assets/images/bg_rec.svg';
import { ReactComponent as Img1 } from '~components/assets/images/img_1.svg';
import { ReactComponent as Img2 } from '~components/assets/images/img-kakao02.svg';
import { ReactComponent as Img3 } from '~components/assets/images/img-kakao03.svg';
import rect01 from '~components/assets/images/img-timepicker.svg';
import KaKaoIcon1 from '~components/assets/images/kakao_icon.svg';
import LoginBorder from '~components/assets/images/login_bg_one.png';
import { ReactComponent as Next } from '~components/assets/images/next.svg';
import { ReactComponent as Prev } from '~components/assets/images/prev.svg';
import { ReactComponent as Scroll3 } from '~components/assets/images/rect_04.svg';
import { ReactComponent as ScrollImg } from '~components/assets/images/scorll_log.svg';
import LoginBg from '~components/assets/misc/bg_img.png';
import rect2  from '~components/assets/misc/lende_ani.gif';
import { Button, Heading, Text } from '~components/index';
import { colorSystem } from '~components/styles/colors.css';
import { fontSystem } from '~components/styles/fonts.css';

import LoginTimer from './TimerComponents/TimerComponents';
import {
  kakaoLoginStyle,
  kakaoLoginStyle2,
  linkBottomStyle,
  loginBodyStyle,
  loginBodyStyle2,
  loginIconStyle,
  loginTextBodyStyle,
  moreBtnStyle,
  text1Recipe,
  txtBottomStyle,
} from './Login.css';
import { useGetKakaoAccessToken } from './Login.hooks';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const expires = moment().add(1, 'y').toDate();

function Login() {
  const [more, setMore] = useState<boolean>(true);
  const codeRef = useRef<string | null>(new URL(window.location.href).searchParams.get('code'));

  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = env.kakaoLogin;
  };

  const handleMoreClick = () => {
    setMore(false);
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
    if (data.tutorialYN) {
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

  const [page, setPage] = useState(1);
  
  // eslint-disable-next-line
  const items = [ <Img1 />, <Img2 />, <Img3 />];

  const options = {
    root: null,
    threshold: 0.01,
  };


  const observer = new IntersectionObserver(((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          const cnt1 = page+1;
          setPage(cnt1);
      }
    });
  }), options);

  let k:any = null;
  useEffect(() => {
    if (more) return;
    k = document.querySelector(`#sc0${page}`);
    if (k != null) {
      observer.observe(k);
    }
  }, [more]);
  
  useEffect(() => {
    observer.disconnect();

    k = document.querySelector(`#sc0${page}`);
    if(k != null ){
       observer.observe(k);
    }
  }, [page]);

  const settings = {
    slide: 'div',
    infinite: false, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    centerMode: true,
    speed: 100, 
    arrows: true, 
    dots: false, 
    autoplay: false,
    pauseOnHover: true,
    vertical: false,
    prevArrow: <Prev style={{ zIndex: 30 }} />, 
    nextArrow: <Next style={{ zIndex: 30 }} />, 
    centerPadding: '0px',
    useCSS: true,
    draggable: true, 
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* <Snowfall
 :       snowflakeCount={30}
        speed={[0.1, 0.1]}
        rotationSpeed={[-1.0, 0.2]}
        style={{ zIndex 1000 }}
      /> */}
      <div
        style={{
          overflowY: 'auto',
        }}
        id="scorll"
        className={loginBodyStyle({ visible: more })}
      >
        <img
          style={{
            position: 'absolute',
            width: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
          src={LoginBg}
          alt="img"
        />
        <div className={loginBodyStyle2}>
          <div className={loginIconStyle}>
            <img
              style={{ position: 'absolute', width: '100%', maxWidth: '500px' }}
              src={LoginBorder}
              alt="img"
            />
            <Logo style={{ position: 'absolute', width: '100%', maxWidth: '500px' }} />
          </div>
          <div className={loginTextBodyStyle}>
            <LoginTimer />

            {more && <ScrollImg className={moreBtnStyle} onClick={handleMoreClick} />}
            <Heading size={2} color="white" className={text1Recipe({ visible: more })} id="sc01">
              불현듯 떠오른 이 마음을 편지로 적어 타임캡슐에 담을 수 있다면
            </Heading>
            <Button
              childrenStyle={{
                color: colorSystem.black,
                fontSize: fontSystem.body.size[3],
                gap: 10,
              }}
              className={kakaoLoginStyle({ visible: more })}
              style={{ marginTop: 'calc((360 / 600) * 100%)' }}
              size="small"
              background="yellow"
              color={colorSystem.black}
              onClick={handleClick}
            >
              <img src={KaKaoIcon1} alt="login" />
              카카오로 5초만에 시작하기
            </Button>
          </div>
        </div>

        {!more && page > 1 && (
          <div
            style={{
              position: 'absolute',
              marginTop: 650,
              flexDirection: 'column',
              alignItems: 'center',
              display: 'flex',
              zIndex: 10,
              width: '100%',
              height: 500,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
                height: 'auto',
                zIndex: -1,
                objectFit: 'cover',
                objectPosition: '0 -651px',
              }}
              src={LoginBg}
              alt="img"
            />
            <img src={rect01} alt="testA" style={{ outline: 'none' }} />
            <Text
              as="span"
              size={3}
              color="black"
              style={{
                fontFamily: 'Pretendard',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '24px',
              }}
              id="sc02"
            >
              너가 꼭 그 순간에 읽었으면 좋겠어
            </Text>
          </div>
        )}

        {!more && page > 2 && (
          <div
            style={{
              background: '#F2E5FF',
              position: 'absolute',
              marginTop: 1100,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              zIndex: 10,
              height: 600,
              width: '100%',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img src={rect2} alt="ani" width="100%" height="300px" style={{ outline: 'none' }} />
            <Text
              as="span"
              size={3}
              color="black"
              style={{
                fontFamily: 'Pretendard',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '24px',
                textAlign: 'center',
              }}
              id="sc03"
            >
              내 편지가 시간선을 따라 흐르다보면
              <br />
              어느새 이 마음은 더 짙어지겠지
            </Text>
          </div>
        )}

        {!more && page > 3 && (
          <div
            style={{
              background: '#F2E5FF',
              position: 'absolute',
              marginTop: 1700,
              flexDirection: 'column',
              alignItems: 'center',
              display: 'flex',
              zIndex: 10,
              width: '100%',
              height: 400,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Scroll3 id="sc04" />
          </div>
        )}

        {!more && page > 4 && (
          <div
            style={{
              position: 'absolute',
              marginTop: 2100,
              flexDirection: 'column',
              alignItems: 'center',
              display: 'flex',
              zIndex: 10,
              width: '100%',
              justifyContent: 'center',
              height: 800,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
                height: 'auto',
                zIndex: -1,
                objectFit: 'cover',
                objectPosition: '0 84%',
              }}
              src={LoginBg}
              alt="img"
            />
            <Heading
              size={2}
              color="white"
              style={{ position: 'absolute', top: 80, textAlign: 'center' }}
            >
              타임레터 💌
              <br />
              이렇게 써보세요
            </Heading>
            <Bg1 style={{ position: 'absolute', top: 200, width: '100%' }} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
                width: '90%',
                justifyContent: 'space-evenly',
              }}
            >
              <Slider {...settings}>
                <div>
                  <Img1 />
                </div>
                <div>
                  <Img2 />
                </div>
                <div>
                  <Img3 />
                </div>
              </Slider>
            </div>

            <Text
              as="span"
              color="black"
              size={3}
              style={{ position: 'absolute', top: 700, color: '#FFFFFF' }}
              id="sc05"
            >
              먼 곳에 떨어진 연인에게
            </Text>
          </div>
        )}

        {!more && page > 5 && (
          <div
            style={{
              marginTop: 2880,
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              display: 'flex',
              zIndex: 30,
              width: '100%',
              justifyContent: 'center',
              height: 220,
              outline: 'none',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
                height: 'auto',
                zIndex: -1,
                objectFit: 'cover',
                objectPosition: '0 94%',
              }}
              src={LoginBg}
              alt="img"
            />
            <Button
              childrenStyle={{
                color: colorSystem.black,
                fontSize: fontSystem.body.size[3],
                gap: 10,
              }}
              className={kakaoLoginStyle2}
              size="small"
              background="yellow"
              color={colorSystem.black}
              onClick={handleClick}
            >
              <img src={KaKaoIcon1} alt="login" />
              카카오로 5초만에 시작하기
            </Button>
          </div>
        )}

        {!more && page > 5 && (
          <div
            style={{
              background: '#F2E6FF',
              position: 'absolute',
              marginTop: 3100,
              flexDirection: 'column',
              alignItems: 'center',
              display: 'flex',
              zIndex: 20,
              width: '100%',
              justifyContent: 'center',
              height: 250,
              color: '#26242E',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <span className={txtBottomStyle}>
              시작할 경우, 타임레터의 서비스 이용약관과
              <br />
              개인정보 보호정책에 동의하게 됩니다.
            </span>
            <span className={linkBottomStyle}>
              <a
                href={`${env.noctionURL}98b4fa790e0f4563a08189679fc91d5e#1324a9245b87421a84aff6b8357f72c8`}
                style={{ color: '#26242E' }}
              >
                사업자 정보확인
              </a>
              <p>|</p>
              <a
                href={`${env.noctionURL}91772865c97d43e68101a5486e229e4d`}
                style={{ color: '#26242E' }}
              >
                이용약관
              </a>
              <p>|</p>
              <a
                href={`${env.noctionURL}f964912552da433c8ac2e7611549ecdf`}
                style={{ color: '#26242E' }}
              >
                개인정보 처리방침
              </a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
