import { atom } from 'recoil';

import { LetterStatus } from '~/const';

export const letterFormState = atom<APISchema.Letter>({
  key: 'letterForm',
  default: { letterStatus: LetterStatus.DRAFT },
});

export const letterFormStepState = atom<number>({
  key: 'letterForm.step',
  default: 1,
});

export const letterImageState = atom<{ image?: string; isLoading?: boolean }>({
  key: 'letterForm.image',
  default: {},
});
