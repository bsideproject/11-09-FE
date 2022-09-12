// TODO Make a new workspace for APISchema to use in both app and components
interface LetterProps {
  senderName: string;
  receiverName: string;
  content: string;
  imageDataURL?: string;
}

type LetterTemplateAttributes = JSX.IntrinsicElements['div'];
export interface LetterTemplateProps extends LetterTemplateAttributes {
  letterProps: LetterProps;
}
