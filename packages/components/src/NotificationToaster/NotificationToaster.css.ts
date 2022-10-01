import { globalStyle, style } from '@vanilla-extract/css';

import { colorSystem } from '../styles/colors.css';
import { vars } from '../styles/global.css';
import { hideProperties } from '../styles/layout.css';

export const notificationToasterStyle = style({
  color: vars.colors.white,
  textAlign: 'center',
});

globalStyle(`${notificationToasterStyle} .bp4-toast`, {
  backgroundColor: colorSystem.gray900,
  border: 0,
  borderRadius: 4,
  boxShadow: 'none',
});

globalStyle(`${notificationToasterStyle} .bp4-button-group`, hideProperties);

globalStyle(`${notificationToasterStyle}.bp4-toast-container-top`, {
  top: 60,
});
