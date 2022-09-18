export type DateType = 'sent' | 'receive' | 'write';

export interface LetterDateProps {
  dateType: DateType;
  date: string;
}
