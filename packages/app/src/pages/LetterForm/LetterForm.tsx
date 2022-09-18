import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useBeforeunload } from '~/hooks';
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
import { useAddLetter, useUpdateLetter, useValidateLetterForm } from './LetterForm.hooks';

const totalSteps = 5;

function LetterForm() {
  const user = useRecoilValue(userState);
  const [letterForm, setLetterForm] = useRecoilState(letterFormState);
  const letterImage = useRecoilValue(letterImageState);

  const [step, setStep] = useRecoilState(letterFormStepState);

  useEffect(() => {
    if (!user) {
      return;
    }
    setLetterForm({
      ...letterForm,
      userID: user.id,
      senderName: user.name,
    });
  }, [user.name, user.id]);

  const validateLetterForm = useValidateLetterForm(step);
  const addLetter = useAddLetter(letterForm);
  const handleNextClick = async () => {
    if (!validateLetterForm()) {
      return;
    }

    if (step === 2 && !letterForm.id) {
      const data = await addLetter();
      setLetterForm({ ...letterForm, id: data[0]?.id });
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setStep((prev) => prev - 1);
  };

  const updateLetter = useUpdateLetter();
  useBeforeunload(async (event) => {
    if (!letterForm.id || step > 1) {
      event.preventDefault();
      await updateLetter(letterForm);
      return false;
    }
    return true;
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
