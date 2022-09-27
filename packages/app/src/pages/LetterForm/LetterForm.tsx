import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { LetterStatus } from '~/const';
import { usePageVisibilityChange } from '~/hooks';
import { userState } from '~/store/user.atoms';
import { Button, ProgressBar } from '~components/index';

import LetterFormContent from './LetterFormContent/LetterFormContent';
import { letterFormState, letterFormStepState, letterImageState } from './LetterForm.atoms';
import {
  letterFormActionButtonStyle,
  letterFormActionsStyle,
  letterFormContentStyle,
  letterFormStyle,
} from './LetterForm.css';
import { useAddLetter, useSaveDraftLetter, useValidateLetterForm } from './LetterForm.hooks';

const totalSteps = 5;

function LetterForm() {
  const user = useRecoilValue(userState);
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);
  const [letterImage, setLetterImage] = useRecoilState(letterImageState);

  const [step, setStep] = useRecoilState(letterFormStepState);

  useEffect(() => {
    if (!user) {
      return;
    }
    setLetterForm({
      letterStatus: LetterStatus.DRAFT,
      userID: user.id,
      senderName: user.name,
    });
    setStep(1);
    setLetterImage({});
  }, [user.name, user.id]);

  const validateLetterForm = useValidateLetterForm(step);
  const addLetter = useAddLetter(letterForm);
  const handleNextClick = async () => {
    if (!validateLetterForm()) {
      return;
    }

    if (step === 2 && !letterForm.id) {
      const data = await addLetter();
      setLetterForm({ ...letterForm, id: data[0]?.id, urlSlug: data[0]?.urlSlug });
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setStep((prev) => prev - 1);
  };

  const saveDraftLetter = useSaveDraftLetter();
  usePageVisibilityChange(() => {
    if (step > 1 && letterForm.letterStatus !== LetterStatus.DONE) {
      saveDraftLetter({ letter: letterForm, method: letterForm.id ? 'PUT' : 'POST' });
    }
  });

  return (
    <div className={letterFormStyle}>
      <ProgressBar steps={totalSteps} activeStep={step} />
      <div className={letterFormContentStyle}>
        <LetterFormContent activeStep={step} />
      </div>
      {!(step === 5 || step === 6) && (
        <div className={letterFormActionsStyle}>
          <Button.Next
            className={letterFormActionButtonStyle}
            style={{ marginLeft: 'auto' }}
            onClick={handleNextClick}
            disabled={letterImage?.isLoading}
          />
          {step > 1 && (
            <Button.Prev
              className={letterFormActionButtonStyle}
              onClick={handlePrevClick}
              disabled={letterImage?.isLoading}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default LetterForm;
