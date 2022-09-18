import { MutableRefObject } from 'react';

export interface LetterBoxCardProps {
  letter: APISchema.LetterTemplate;
  draftLetterMap?: MutableRefObject<Map<string, APISchema.LetterTemplate>>;
}
