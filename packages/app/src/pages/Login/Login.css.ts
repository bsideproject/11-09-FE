import { style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

export const loginBodyStyle = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const loginIconStyle = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const loginTextBodyStyle = style({
  paddingTop: 'calc((240 / 600) * 100%)',
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});


export const kakaoLoginStyle = style({
  height: '64px',
  width: '80%',
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
