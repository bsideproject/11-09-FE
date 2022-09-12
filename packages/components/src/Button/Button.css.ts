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

export const hoverBackgroundVar = createVar();

export const buttonStyle = style({
  vars: { [hoverBackgroundVar]: vars.colors.gradientDark },
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  fontSize: vars.fonts.body.size[3],
  color: vars.colors.white,
  cursor: 'pointer',
});

export const buttonChildrenStyle = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const buttonStackOrderVar = createVar();
export const buttonStackOrderStyle = style({
  vars: { [buttonStackOrderVar]: `${setStackOrder('custom', 3)}` },
  zIndex: buttonStackOrderVar,
});

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
        vars: { [hoverBackgroundVar]: vars.colors.primaryLight },
        ':hover': { background: hoverBackgroundVar },
        ':active': { background: hoverBackgroundVar },
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
          zIndex: `calc(${buttonStackOrderVar} - 2)`,
        },
        '::after': {
          content: '',
          position: 'absolute',
          width: 'inherit',
          height: 'inherit',
          background: vars.colors.gradientDark,
          transition: `opacity ${vars.transitions.duration.fast} ${vars.transitions.timing.easeOut}`,
          borderRadius: 'inherit',
          zIndex: `calc(${buttonStackOrderVar} - 1)`,
          opacity: 0,
        },
        selectors: { '&:hover:after': { opacity: 1 } },
      },
      transparent: { background: 'transparent' },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
      false: {
        cursor: 'pointer',
      },
    },
  },
});
