import { style } from '@vanilla-extract/css';

const borderRadius = 12;

export const letterImageWrapperStyle = style({
  aspectRatio: '12 / 9',
  overflow: 'hidden',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius,
});

export const letterImageStyle = style({
  width: 'auto',
  height: '100%',
});
