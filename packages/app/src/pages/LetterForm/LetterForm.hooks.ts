import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { useMutation } from '@tanstack/react-query';

import { letterAPI } from '~/api';
import { letterFormState } from '~/pages/LetterForm/LetterForm.atoms';
import { NotificationToaster } from '~components/index';

import { useValidateNameField } from './NameField/NameField.hooks';

export const useValidateLetterForm = (activeStep: number) => {
  const validateNameField = useValidateNameField();
  const letterForm = useRecoilValue(letterFormState);

  return useCallback(() => {
    if (activeStep === 1) {
      return validateNameField();
    }

    if (activeStep === 2) {
      return validateNameField();
    }

    if (activeStep === 4) {
      if (!letterForm.content) {
        NotificationToaster.show('편지 내용을 입려해주세요.');
      }
      return !!letterForm.content;
    }

    return true;
  }, [activeStep, validateNameField, letterForm.content]);
};

export const useAddLetter = (letterForm: APISchema.Letter) =>
  useMutation(() => letterAPI.addLetter(letterForm), {
    onError: () => {
      NotificationToaster.show('편지 저장에 실패했습니다.');
    },
  }).mutateAsync;
