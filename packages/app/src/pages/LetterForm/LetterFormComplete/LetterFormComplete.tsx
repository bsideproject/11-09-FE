import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// import { ReactComponent as LetterSendImage } from '~components/assets/images/lettersend.svg';
import { ReactComponent as SanTa } from '~components/assets/images/25_send_santa.svg';
import { Button, Text } from '~components/index';
import { gradientOutlineRecipe } from '~components/styles/gradient.css';

import { letterFormState, letterFormStepState } from '../LetterForm.atoms';

import { letterFormCompleteStyle, receiverNameStyle } from './LetterFormComplete.css';

function LetterFormComplete() {
  const letterForm = useRecoilValue(letterFormState);
  const setStep = useSetRecoilState(letterFormStepState);
  const navigate = useNavigate();

  const handleClick = () => {
    setStep(1);
    navigate('/', { replace: true });
  };

  return (
    <>
      <div style={{
          display: 'flex',
          flexDirection: 'column'
      }}
       className={letterFormCompleteStyle}>
        <SanTa style={{ alignSelf: 'center' }} />
        <Text as="p" color="white" asHeadingFont style={{ marginTop: 20, textAlign: 'center' }}>
          <Text
            className={[receiverNameStyle, gradientOutlineRecipe({ background: 'black' })]}
            color="white"
          >
            {letterForm.receiverName}
          </Text>
          님께
          <br />
          애정 담긴 편지를 보냈어요.
        </Text>
      </div>
      <Button onClick={handleClick} style={{ marginTop: 'auto' }}>
        홈으로 가기
      </Button>
    </>
  );
}

export default LetterFormComplete;
