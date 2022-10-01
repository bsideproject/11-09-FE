import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '../styles/global.css';

export const timePickerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
});

const timeHeight = 42;
globalStyle(`${timePickerStyle} .bp4-timepicker-input-row`, {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  height: timeHeight,
  boxShadow: 'none',
  fontFamily: vars.fonts.body.family,
});

globalStyle(`${timePickerStyle} .bp4-timepicker-input-row input`, {
  boxSizing: 'content-box',
  height: timeHeight,
  padding: '4px 10px',
  fontSize: vars.fonts.display.size[3],
  border: `1px solid ${vars.colors.gray300}`,
  borderRadius: 4,
});

globalStyle(`${timePickerStyle} .bp4-timepicker-divider-text`, {
  fontSize: vars.fonts.display.size[3],
});

// arrow style
globalStyle(`${timePickerStyle} .bp4-icon svg`, {
  width: 24,
  height: 24,
  fill: vars.colors.gray500,
});

globalStyle(`${timePickerStyle} .bp4-timepicker-arrow-button + .bp4-timepicker-arrow-button`, {
  marginLeft: 23,
});
