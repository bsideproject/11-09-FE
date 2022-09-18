import { atom } from 'recoil';

export const letterDraftBoxState = atom<APISchema.LetterTemplate[]>({
  key: 'letterDraftBox',
  default: [],
});
