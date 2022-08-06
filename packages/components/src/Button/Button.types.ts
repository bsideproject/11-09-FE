import { ReactNode } from 'react';

import { buttonSprinkles } from './Button.css';

export type ButtonSprinkles = Parameters<typeof buttonSprinkles>[0];
export type ButtonVariant = 'outline' | 'solid';
export type ButtonBackground = ButtonSprinkles['background'];
type ButtonSize = ButtonSprinkles['height'];

type ButtonAttributes = JSX.IntrinsicElements['button'];

interface ButtonCommonProps extends Omit<ButtonAttributes, 'children'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  background?: ButtonBackground;
  borderColor?: ButtonSprinkles['borderColor'];
}

type ButtonWithIconProps = ButtonCommonProps & {
  children: ReactNode;
  label?: string;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
};
type ButtonWithLabelProps = ButtonCommonProps & {
  children?: false;
  label: string;
  iconPosition?: false;
  iconOnly?: false;
};

export type ButtonProps = ButtonWithIconProps | ButtonWithLabelProps;
