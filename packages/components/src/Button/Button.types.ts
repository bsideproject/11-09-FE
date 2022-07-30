type ButtonAttributes = JSX.IntrinsicElements['button'];

export interface ButtonProps extends ButtonAttributes {
  size?: 'small' | 'medium' | 'large';
  label: string;
}
