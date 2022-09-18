type LetterCardAttributes = JSX.IntrinsicElements['div'];

export interface LetterCardProps extends LetterCardAttributes {
  id: string;
  senderName: string;
  letterStatus: 'DONE' | 'DRAFT';
  receiverName?: string;
  content?: string;
  image?: string;
  receivedDate?: string; // "yyyy-MM-dd HH:mm:ss"
  createdAt?: string; // "yyyy-MM-dd HH:mm:ss"
}
