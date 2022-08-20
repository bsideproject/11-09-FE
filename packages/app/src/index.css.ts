import { globalStyle } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

globalStyle('body', {
  boxSizing: 'border-box',
  fontFamily: vars.fonts.body.family,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
});

globalStyle('a', {
  padding: 0,
  margin: 0,
  color: '#FFFFFF',
});

globalStyle('#root', {
  width: 360,
  minHeight: '100vh',
  overflow: 'hidden',
  margin: '0 auto',
  alignItems: 'center',
  backgroundColor: '#26242E',
});
