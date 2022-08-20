import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

export const introTextStyle = style({
  width: '100%',
  color: '#FFFFFF',
  fontFamily: vars.fonts.display.family,
  fontSize: vars.fonts.display.size[2],
  textAlign: 'center',
  margin: 0,
  marginBottom: '25px',
  whiteSpace: 'pre-wrap',
});

globalStyle(`${introTextStyle} > span`, {
  fontFamily: vars.fonts.display.family,
  fontSize: vars.fonts.display.size[2],
  color: '#84FDD1',
});
