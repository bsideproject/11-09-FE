import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

globalStyle('a', {
  padding: 0,
  margin: 0,
  color: '#FFFFFF',
});
// Nav 쪽
export const Nav = style({
  width: '100%',
  height: '41px',
  position: 'absolute',
  flexDirection: 'column',
  display: 'flex',
  color: '#FFFFFF',
  marginTop: '10px',
});

globalStyle('ul li', {
  display: 'table-row',
  fontFamily: vars.fonts.display.family,
  fontSize: vars.fonts.display.size[2],
  width: '50%',
  height: '41px',
  float: 'left',
  textAlign: 'center',
  lineHeight: '40px',
  fontWeight: '700',
  flexDirection: 'row',
  alignItems: 'center',
});
// Nav 쪽

export const letterBody = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  left: '50%',
  flexDirection: 'column',
  marginTop: '25%',
  alignItems: 'center',
});
