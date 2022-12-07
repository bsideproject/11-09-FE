export type DateType = 'sent' | 'receive' | 'write' | 'link';

export interface LetterDateProps {
  dateType: DateType;
  date: string;
}
