import { style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

export const loginBody = style({
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '360px',
  height: '100vh',
});

export const time = style({
  position: 'absolute',
  width: '132px',
  height: '21px',
  left: '111px',
  top: '211px',
  background: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '4px',
  fontFamily: vars.fonts.display.family,
  fontWeight: '700',
  fontSize: '13px',
  lineHeight: '23px',
  textAlign: 'center',
  color: '#FFFFFF',
});

export const kakaoLogin = style({
  position: 'absolute',
  height: '64px',
  width: '320px',
  left: '20px',
  top: '420px',
  color: '#FFFFFF',
});

export const bottomNav = style({
  position: 'absolute',
  width: '236px',
  height: '40px',
  left: '62px',
  top: '513px',
  fontSize: vars.fonts.body.size[2],
  lineHeight: '20px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: '#FFFFFF',
});

export const bottomNav2 = style({
  position: 'absolute',
  width: '160px',
  height: '18px',
  left: '108px',
  top: '578px',
  fontWeight: '700',
  fontSize: vars.fonts.body.size[1],
  lineHeight: '18px',
  display: 'flex',
  textAlign: 'center',
  color: '#FFFFFF',
});

export const introBody = style({
  width: '100%',
  top: '50%',
  left: '50%',
  position: 'absolute',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
});

export const introText = style({
  width: '100%',
  color: '#FFFFFF',
  fontFamily: vars.fonts.display.family,
  fontSize: vars.fonts.display.size[2],
  textAlign: 'center',
  margin: 0,
  marginBottom: '25px',
  whiteSpace: 'pre-wrap',
});

export const buttonNext = style({
  width: '100%',
  position: 'absolute',
  color: '#FFFFFF',
  fontFamily: vars.fonts.display.family,
  fontSize: vars.fonts.display.size[2],
  textAlign: 'center',
  margin: 0,
});
