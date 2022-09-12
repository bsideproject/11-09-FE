import { ReactElement, ReactNode } from 'react';

import { buttonSprinkles } from './Button.css';

export type ButtonSprinkles = Parameters<typeof buttonSprinkles>[0];
export type ButtonVariant = 'outline' | 'solid' | 'transparent';
export type ButtonBackground = ButtonSprinkles['background'];
type ButtonSize = ButtonSprinkles['height'];
type IconPosition = 'left' | 'right';

type ButtonAttributes = JSX.IntrinsicElements['button'];

interface ButtonCommonProps extends Omit<ButtonAttributes, 'children'> {
  size?: ButtonSize;
  label: string;
  children?: ReactElement | ReactNode | ReactNode[] | string;
}

export type OutlineVariantProps = ButtonCommonProps & {
  variant?: 'outline';
  borderColor?: ButtonSprinkles['borderColor'];
  background?: undefined;
};
export type SolidVariantProps = ButtonCommonProps & {
  variant?: 'solid';
  borderColor?: undefined;
  background?: ButtonBackground;
};
export type TransparentVariantProps = ButtonCommonProps & {
  variant?: 'transparent';
  borderColor?: undefined;
  background?: undefined;
};

export type ButtonVariantProps = SolidVariantProps | OutlineVariantProps | TransparentVariantProps;

export type IconOnlyProps = Omit<ButtonVariantProps, 'label'> & {
  iconOnly: true;
  children: ReactElement;
  label?: undefined;
};
export type WithChildrenProps = Omit<ButtonVariantProps, 'label'> & {
  label?: string;
  children: ReactNode | ReactNode[] | string;
  childrenClassName?: string;
  childrenStyle?: ButtonCommonProps['style'];
};
export type WithIconProps = ButtonVariantProps & {
  iconOnly?: undefined;
  iconPosition?: IconPosition;
  iconOnlySize?: number;
};
export type ButtonProps = Omit<ButtonVariantProps, 'label'> & {
  iconOnly?: unknown;
  iconPosition?: unknown;
  iconOnlySize?: unknown;
  label?: string;
  childrenClassName?: string;
  childrenStyle?: ButtonCommonProps['style'];
};
