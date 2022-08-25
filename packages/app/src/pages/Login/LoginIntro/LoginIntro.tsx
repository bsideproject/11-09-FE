import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Heading, Text } from '~components/index';

import IntroText from '../IntroText/IntroText';

import { introBodyStyle } from './LoginIntro.css';
import { LoginIntroPorps, LoginIntroType } from './LoginIntro.types';

// TODO: api 통신 후 mock 데이터 제거하기
// TODO: 뛰어씌 필요한 부분 {} 수정 --> nbsp -> {' '} 변경시 코드 복잡성 증가
export const introValue = (nickName = '우영우님') => ({
  intro1: (
    <Heading size={2} color="white">
      <Text as="span" size={4} color="secondary" asHeadingFont>
        {nickName}
        님
      </Text>
      {', 만나서 반가워요. \n'}
      {'타임캡슐 편지 서비스 타임레터는 \n'}
      {'편지 보내기 전 '}
      <Text as="span" size={4} color="secondary" asHeadingFont>
        상대방이 편지 읽을 수
      </Text>
      {'\n'}
      <Text as="span" size={4} color="secondary" asHeadingFont>
        있는 시간을 선택
      </Text>
      할 수 있어요.
    </Heading>
  ),
  intro2: (
    <Heading size={2} color="white">
      그래서 편지를 받아도
      {'\n'}
      <Text as="span" size={4} color="secondary" asHeadingFont>
        타이머에 적힌 시간이 다 될 때까지
      </Text>
      {'\n'}
      기다려야 읽을 수 있답니다.
    </Heading>
  ),
  intro3: (
    <Heading size={2} color="white">
      그럼 이제 타임레터와 함께
      {'\n'}
      <Text as="span" size={4} color="secondary" asHeadingFont>
        이 순간의 애정
      </Text>
      {'을 \n'}
      고스란히 보내볼까요?💌
    </Heading>
  ),
});

export const buttonValue = () => ({
  intro1: '신기해요 😮',
  intro2: '그렇군요 🤔',
  intro3: '좋아요 🥰',
});

function LoginIntro() {
  const [introStep, setIntroStep] = useState<number>(1);
  const intro = `intro${introStep}` as LoginIntroType;

  const handleClick = () => {
    setIntroStep((prev) => prev + 1);
  };
  // TODO : useLocation 에 Type설정 router-v6부터 불가
  const location = useLocation();
  const nickName = location.state as LoginIntroPorps;
  const navigate = useNavigate();
  useEffect(() => {
    if (introStep > 3) {
      navigate('/', { replace: true });
    }
  }, [introStep]);

  if (introStep > 3) {
    return null;
  }

  return (
    <div className={introBodyStyle}>
      <IntroText>{introValue(nickName.nickName)[intro]}</IntroText>

      <Button
        style={{ background: '#8055FA', width: '200px' }}
        label={buttonValue()[intro]}
        size="small"
        variant="solid"
        onClick={handleClick}
      />
    </div>
  );
}

export default LoginIntro;
