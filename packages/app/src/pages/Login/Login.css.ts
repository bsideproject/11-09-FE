import { style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

export const loginBodyStyle = style({
  position: 'relative',
  width: '360px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto',
  justifyContent: 'center',
});

export const kakaoLoginStyle = style({
  height: '64px',
  width: '320px',
});

export const txtBottomStyle = style({
  height: '40px',
  lineHeight: '20px',
  textAlign: 'center',
  marginTop: '5%',
  color: '#FFFFFF',
});

export const linkBottomStyle = style({
  height: '18px',
  fontWeight: '700',
  fontSize: vars.fonts.body.size[1],
  lineHeight: '18px',
  display: 'inline-flex',
  gap: 10,
  textAlign: 'center',
  color: '#FFFFFF',
  marginTop: '5%',
  zIndex: 1,
});
