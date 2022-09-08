import { vars } from '@timeletter_fe/components/src/styles/global.css';
import { style } from '@vanilla-extract/css';

export const reminderBodyStyle = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
});

export const reminderContentStyle = style({
  flex: '1 1 auto',
  padding: '10px calc((20 / 360) * 100%)',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});


export const reminderBottomStyle = style({
  padding: '10px calc((20 / 360) * 100%)',
  display: 'flex',
  justifyContent: 'space-around',
});

export const reminderImgStyle = style({
  display: 'flex',
  width: '100%',
  margin: '10% auto',
  alignItems: 'center',
  justifyContent: 'center',
});

export const reminderTwoButtonStyle = style({
  textAlign: 'center',
  color: vars.colors.white,
  backgroundColor: 'unset',
  margin: '0 8px',
  fontWeight: 700,
  fontSize: vars.fonts.body.size[3],
  lineHeight: vars.fonts.body.lineHeight[3],
});


export const reminderOneButtonStyle = style({
  fontWeight: 700,
  fontSize: vars.fonts.body.size[3],
  lineHeight: vars.fonts.body.lineHeight[3],
});