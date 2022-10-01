import { style } from '@vanilla-extract/css';

import { vars } from './global.css';

export const inputStyle = style({
  display: 'inline-style',
  alignItems: 'center',
  width: '100%',
  height: '54px',
  padding: '0 16px',
  border: 0,
  borderRadius: 13,
  backgroundColor: vars.colors.gray900,
  color: vars.colors.white,
  fontSize: vars.fonts.body.size[3],
  caretColor: vars.colors.secondary,

  '::placeholder': { opacity: 0.7 },
});
