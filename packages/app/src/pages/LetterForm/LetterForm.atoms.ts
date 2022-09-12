import { atom } from 'recoil';

export const letterFormState = atom<APISchema.Letter>({
  key: 'letterForm',
  default: {},
});

export const letterFormStepState = atom<number>({
  key: 'letterForm.step',
  default: 1,
});

export const letterImageState = atom<{ image?: string; isLoading?: boolean }>({
  key: 'letterForm.image',
  default: {},
});
