import { globalStyle } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

globalStyle('body, body *', {
  all: 'unset',
  boxSizing: 'border-box',
  fontFamily: vars.fonts.body.family,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  padding: 0,
  margin: 0,
});
