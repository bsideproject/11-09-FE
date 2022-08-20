/* eslint-disable simple-import-sort/imports */
/* eslint-disable import/order */
import { Button } from '~components/index';

import IntroText from '../IntroText/IntroText';

import { fontSprinkles } from '~components/styles/fonts.css';
import { introBodyStyle } from './LoginIntro.css';

// TODO: api 통신 후 mock 데이터 제거하기
export const introValue = (nickName = '우영우님') => ({
  intro1: {
    1: (
      <div>
        <span className={fontSprinkles({ color: 'secondary' })}>{nickName}</span>
        &nbsp;만나서 반가워요.
      </div>
    ),
    2: '타임캡슐 편지 서비스 타임레터는',
    3: (
      <div>
        편지 보내기 전
        <span className={fontSprinkles({ color: 'secondary' })}>상대방이 편지 읽을 수</span>
      </div>
    ),
    4: (
      <div>
        <span className={fontSprinkles({ color: 'secondary' })}>있는 시간 선택</span>할 수 있어요.
      </div>
    ),
  },
  intro2: {
    1: '그래서 편지를 받아도', 
    2: <span className={fontSprinkles({ color: 'secondary' })}>타이머에 적힌 시간이 다 될 때까지</span>,
    3: '기다려야 읽을 수 있답니다.',
  },
  intro3: {
    1: '그럼 이제 타임레터와 함께',
    2: (
      <div>
        <span>이 순간의 애정</span>
        을
      </div>
    ),
    3: '고스란히 보내볼까요?💌',   
  }
});

function LoginIntro() {
  const handleClick = () => undefined;

  return (
    <div className={introBodyStyle}>
      <IntroText>
        {Object.values(introValue('우영우님').welcome).map((reactNode, index) => (
          <div key={index}>{reactNode}</div>
        ))}
      </IntroText>

      <Button
        style={{ background: '#8055FA', width: '200px' }}
        label="네!"
        size="small"
        variant="solid"
        onClick={handleClick}
      />
    </div>
  );
}

export default LoginIntro;
