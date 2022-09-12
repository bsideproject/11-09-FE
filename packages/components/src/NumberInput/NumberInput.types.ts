import { NumberFormatProps } from 'react-number-format';

export type InputTypeNumber = Extract<JSX.IntrinsicElements['input']['type'], 'number' | 'tel'>;

export interface NumberInputProps extends Omit<NumberFormatProps, 'type' | 'onReset'> {
  type: InputTypeNumber;
  placeholder?: string;
}
