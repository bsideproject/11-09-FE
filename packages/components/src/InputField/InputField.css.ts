import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../styles/global.css';

export const inputFieldStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const inputFieldContentRecipe = recipe({
  base: { border: '1px solid' },
  variants: {
    error: {
      true: { borderColor: vars.colors.error },
      false: { borderColor: 'transparent' },
    },
  },
});

export const inputFieldErrorStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
});
