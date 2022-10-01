import { globalStyle } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

globalStyle('html', {
  height: '100%',
});

globalStyle('body', {
  boxSizing: 'border-box',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  fontFamily: vars.fonts.body.family,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  margin: 0,
  padding: 0,
  height: '100%',
});

globalStyle('body *', {
  margin: 0,
  padding: 0,
});

globalStyle('body *:focus', {
  outline: 'none',
});

globalStyle('a', { color: '#FFFFFF' });

globalStyle('ul', { listStyle: 'none' });

globalStyle('li', { listStyle: 'none' });

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  margin: '0 auto',
  backgroundColor: vars.colors.black,

  '@media': { 'screen and (min-width: 768px)': { width: 360 } },
});
