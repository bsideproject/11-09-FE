import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../styles/global.css';

const buttonSize = {
  large: '64px',
  medium: '60px',
  small: '54px',
};

const buttonVariantColors = defineProperties({
  properties: {
    background: {
      gradient: vars.colors.gradientDark,
      primary: vars.colors.primary,
      primaryLight: vars.colors.primaryLight,
      transparent: 'transparent',
    },
    borderColor: {
      gradient: vars.colors.gradientDark,
      primary: vars.colors.primary,
    },
    width: {
      parent: '100%',
      ...buttonSize,
    },
    height: { ...buttonSize },
  },
});
export const buttonSprinkles = createSprinkles(buttonVariantColors);

export const buttonClassName = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    fontWeight: 600,
  },
  variants: {
    size: {
      large: { borderRadius: '16px' },
      medium: { borderRadius: '14px' },
      small: { borderRadius: '20px' },
    },
    variant: {
      outline: {
        border: '1px solid',
        color: vars.colors.primary,
      },
      solid: {
        background: vars.colors.gradientDark,
        color: vars.colors.white,
      },
    },
  },
});
