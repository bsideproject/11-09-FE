import { ButtonBackground, ButtonVariant } from './Button.types';

export function getBackground(
  variant: ButtonVariant,
  background?: ButtonBackground,
): ButtonBackground {
  if (background) {
    return background;
  }

  return (<Record<ButtonVariant, ButtonBackground>>{
    solid: 'gradient',
    outline: 'transparent',
  })[variant];
}
