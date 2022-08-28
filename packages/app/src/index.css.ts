import { globalStyle } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

globalStyle('body', {
  boxSizing: 'border-box',
  fontFamily: vars.fonts.body.family,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  margin: 0,
  padding: 0,
});

globalStyle('body *', {
  margin: 0,
  padding: 0,
});

globalStyle('a', { color: '#FFFFFF' });

globalStyle('ul', { listStyle: 'none' });

globalStyle('li', { listStyle: 'none' });

globalStyle('#root', {
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  margin: '0 auto',
  backgroundColor: vars.colors.black,

  '@media': { 'screen and (min-width: 768px)': { width: 360 } },
});
