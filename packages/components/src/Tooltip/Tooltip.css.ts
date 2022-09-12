import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '../styles/global.css';

export const tooltipStyle = style({});

globalStyle(`${tooltipStyle} .bp4-popover-content`, {
  maxWidth: 300,
  padding: 12,
  background: vars.colors.primaryDark,
});

export const tooltipActionStyle = style({
  gap: 6,
  fontWeight: '400',
});
