import { LetterStatus } from '~/const';

export const letterBoxLabelByType: Record<APISchema.LetterStatus, string> = {
  [LetterStatus.DONE]: '보낸 편지함',
  [LetterStatus.DRAFT]: '임시 저장함',
};
