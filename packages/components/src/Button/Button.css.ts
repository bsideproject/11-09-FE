import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../styles/global.css';
import { setStackOrder } from '../styles/tools';

const buttonSize = {
  large: '64px',
  medium: '60px',
  small: '54px',
  custom: '100%',
};

const buttonVariantColors = defineProperties({
  properties: {
    background: {
      gradient: vars.colors.gradientDark,
      primary: vars.colors.primary,
      primaryLight: vars.colors.primaryLight,
      transparent: 'transparent',
      black: vars.colors.black,
      white: vars.colors.white,
      yellow: vars.colors.yellow,
    },
    borderColor: {
      gradient: 'transparent',
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

export const hoverBackground = createVar();

export const buttonStyle = style({
  vars: { [hoverBackground]: vars.colors.gradientDark },
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  cursor: 'pointer',
  color: vars.colors.white,
});

export const buttonStackOrderStyle = style({ zIndex: setStackOrder('interaction') });

export const buttonRecipe = recipe({
  base: { borderWidth: 0 },
  variants: {
    size: {
      large: { borderRadius: '16px' },
      medium: { borderRadius: '14px' },
      small: { borderRadius: '20px' },
      custom: {
        width: '100%',
        height: '100%',
      },
    },
    variant: {
      outline: {
        border: `1px solid ${vars.colors.primary}`,
        color: vars.colors.primary,
        background: 'transparent',
        transition: `background ${vars.transitions.duration.fast} ${vars.transitions.timing.easeOut}`,
        vars: { [hoverBackground]: vars.colors.primaryLight },
        ':hover': { background: hoverBackground },
        ':active': { background: hoverBackground },
      },
      solid: {
        position: 'relative',
        color: vars.colors.white,
        backgroundColor: 'transparent',
        '::before': {
          content: '',
          position: 'absolute',
          width: 'inherit',
          height: 'inherit',
          background: vars.colors.primary,
          borderRadius: 'inherit',
          zIndex: setStackOrder('interaction') - 2,
        },
        '::after': {
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: vars.colors.gradientDark,
          transition: `opacity ${vars.transitions.duration.fast} ${vars.transitions.timing.easeOut}`,
          borderRadius: 'inherit',
          zIndex: setStackOrder('interaction') - 1,
          opacity: 0,
        },
        selectors: { '&:hover:after': { opacity: 1 } },
      },
      transparent: { background: 'transparent' },
    },
  },
});
