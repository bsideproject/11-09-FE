import { MouseEventHandler, ReactElement } from 'react';

type TextInputAttributes = JSX.IntrinsicElements['input'];

export type InputTypeText = Extract<TextInputAttributes['type'], 'text' | 'email'>;

export interface TextInputProps extends Omit<TextInputAttributes, 'type' | 'onReset'> {
  type: InputTypeText;
  leftIcon?: ReactElement;
  showReset?: boolean;
  onReset?: MouseEventHandler<HTMLButtonElement>;
}
