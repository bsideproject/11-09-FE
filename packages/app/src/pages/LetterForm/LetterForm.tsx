import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import { useRecoilState, useRecoilValue } from 'recoil';

import { LetterStatus } from '~/const';
import { useBlocker, usePageVisibilityChange } from '~/hooks';
import { userState } from '~/store/user.atoms';
import { Button, ProgressBar } from '~components/index';
import { isDraftLetter } from '~utils/letter';

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
      ...letterForm,
      letterStatus: LetterStatus.DRAFT,
      userID: user.id,
      senderName: letterForm.senderName ?? user.name,
    });
    setStep(1);
    setLetterImage({});

    // eslint-disable-next-line consistent-return
    return () => {
      setLetterForm({});
    };
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
  const saveDraftCondition =
    step > 1 &&
    step < 6 &&
    isDraftLetter(letterForm.letterStatus ?? LetterStatus.DRAFT) &&
    !!letterForm.receiverName;
  const saveDraftParams: APISchema.SaveDraftLetter = {
    letter: letterForm,
    method: letterForm.id ? 'PUT' : 'POST',
  };
  usePageVisibilityChange(() => {
    if (saveDraftCondition) {
      saveDraftLetter(saveDraftParams);
    }
  });
  const navigate = useNavigate();
  const blockRef = useRef<boolean>(false);
  useEffect(() => {
    blockRef.current = saveDraftCondition;
  }, [saveDraftCondition]);
  useBlocker((blocker: any) => {
    blockRef.current = false;
    saveDraftLetter(saveDraftParams, {
      onSuccess: () => {
        navigate(blocker.location.pathname, { replace: true });
      },
    });
  }, blockRef);

  return (
    <div className={letterFormStyle}>
      <Snowfall
        snowflakeCount={30}
        speed={[0.1, 0.1]}
        rotationSpeed={[-1.0, 0.2]}
        style={{ zIndex: 18 }}
      />
      <ProgressBar steps={totalSteps} activeStep={step} />
      <div id="letter-form-wrapper" className={letterFormContentStyle}>
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
