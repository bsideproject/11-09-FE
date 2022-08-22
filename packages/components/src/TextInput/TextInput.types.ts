type TextInputAttributes = JSX.IntrinsicElements['input'];

export type InputTypeText = Extract<TextInputAttributes['type'], 'text' | 'email'>;

export interface TextInputProps extends Omit<TextInputAttributes, 'type'> {
  type: InputTypeText;
}
