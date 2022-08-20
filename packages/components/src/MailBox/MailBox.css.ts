import { style } from '@vanilla-extract/css';

export const mailBox = style({
  display: 'flex',
  width: '320px',
  height: '153px',
  background: '#FFFFFF',
  borderRadius: '12px',
  flexDirection: 'column',
  borderImageSource: 'linear-gradient(90deg, #A788FF 0%, #F5B5FF 100%)',
  border: '1px solid',
});

export const mailIcon = style({
  position: 'relative',
  marginLeft: '20px',
  width: '48px',
  height: '48px',
  background: '#444249',
  borderRadius: '10px',
});

export const messageLine = style({
  marginTop: '20px',
  width: '100%',
  height: '45%',
  float: 'left',
  display: 'flex',
});

export const titleSpan = style({
  color: '#8055FA',
  fontFamily: 'PyeongChangPeace',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  marginBottom: '5px',
});

export const contentSpan = style({
  marginLeft: '10px',
  fontFamily: 'Pretendard',
  fontSize: '14px',
  lineHeight: '1.8em',
});

export const dateLine = style({
  width: '100%',
  height: '20%',
  display: 'flex',
  float: 'left',
});

export const dateIcon = style({
  position: 'relative',
  marginLeft: '20px',
  width: '16px',
  height: '16px',
});

export const dateSpan = style({
  marginLeft: '5px',
  fontFamily: 'Pretendard',
  fontSize: '12px',
  lineHeight: '1.4em',
});
