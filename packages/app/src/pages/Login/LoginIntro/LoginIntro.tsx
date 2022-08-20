import { Button } from '~components/index';

import IntroText from '../IntroText/IntroText';

import { introBodyStyle } from './LoginIntro.css';

// TODO: api 통신 후 mock 데이터 제거하기
export const introValue = (nickName = '우영우님') => ({
  welcome: [
    <span key={nickName}>{nickName}</span>,
    '만나서 반가워요.\n 타임캡슐 편지 서비스 타임레터는\n 편지 보내기 전',
    <span key={1}>상대방이 편지 읽을 수\n 있는 시간을 선택</span>,
    '할 수 있어요.',
  ],
  // {
  //   value:
  //     '그래서 편지를 받아도,\n <span>타이머에 적힌 시간이 다 될 때까지</span>\n 기다려야 읽을 수 있답니다.',
  // },
  // { value: '그럼 이제 타임레터와 함께\n <span>이 순간의 애정</span>을\n 고스란히 보내볼까요?💌' },
});

function LoginIntro() {
  const handleClick = () => undefined;
  return (
    <div className={introBodyStyle}>
      <IntroText>
        {introValue('우영우님').welcome.map((reactNode) => (
          <div key={1}>{reactNode}</div>
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
