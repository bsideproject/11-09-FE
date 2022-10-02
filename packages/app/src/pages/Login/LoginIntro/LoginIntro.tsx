import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAPI } from '~/api';
import { state } from '~/store';
import { Button, Heading, Text } from '~components/index';

import IntroText from '../IntroText/IntroText';

import { introBodyStyle } from './LoginIntro.css';
import { LoginIntroType } from './LoginIntro.types';

// TODO: 뛰어씌 필요한 부분 {} 수정 --> nbsp -> {' '} 변경시 코드 복잡성 증가
export const introValue = (name: string) => ({
  intro1: (
    <Heading size={2} color="white">
      <Text as="span" size={4} color="secondary" asHeadingFont>
        {name}님
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
  const { name } = useRecoilValue(state.user);
  const [introStep, setIntroStep] = useState<number>(1);
  const intro = `intro${introStep}` as LoginIntroType;

  const handleClick = () => {
    setIntroStep((prev) => prev + 1);
  };

  const navigate = useNavigate();

  const tutorialUpdate = async () => {
    await authAPI.tutorial({ tutorialYN: false });
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (introStep > 3) {
      tutorialUpdate();
    }
  }, [introStep]);

  if (introStep > 3) {
    return null;
  }

  return (
    <div className={introBodyStyle}>
      <IntroText>{introValue(name || '-')[intro]}</IntroText>

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
