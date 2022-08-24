import { style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

export const loginBodyStyle = style({
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '360px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const iconOneStyle = style({
  width: '100%',
  height: 600,
  zIndex: -1,
  justifyContent: 'center',
  display: 'flex',
});

export const bodySizeStyle = style({
  width: '100%',
  height: '10%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const kakaoLoginStyle = style({
  height: '64px',
  width: '320px',
});

export const txtBottomStyle = style({
  width: '236px',
  height: '40px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#FFFFFF',
});

export const linkBottomStyle = style({
  width: '160px',
  height: '18px',
  fontWeight: '700',
  fontSize: vars.fonts.body.size[1],
  lineHeight: '18px',
  display: 'flex',
  textAlign: 'center',
  color: '#FFFFFF',
});
