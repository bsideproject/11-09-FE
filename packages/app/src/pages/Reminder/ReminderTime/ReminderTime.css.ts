import { vars } from '@timeletter_fe/components/src/styles/global.css';
import { style } from '@vanilla-extract/css';

export const reminderTimer = style({
  width: '100%',
  height: '114px',
  margin: '20px auto',
  background: 'linear-gradient(90deg, #7848FF 0%, #DA74E3 100%)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  flexWrap: 'wrap',
  color: vars.colors.white,
});

export const timeBorderStyle = style({
  borderRadius: '4px',
  width: '23%',
  height: 52,
  background: vars.colors.white,
  border: `1px solid ${vars.colors.primary}`,
  textAlign: 'center',
  padding: '11px 0',
});

export const colonStyle = style({
  fontSize: vars.fonts.body.size[4],
  fontWeight: 300,
  lineHeight: '32px',
});

export const bottomTagStyle = style({
  width: '23%',
  textAlign: 'center',
  fontSize: vars.fonts.display.size[2],
  fontWeight: 400,
  lineHeight: vars.fonts.display.lineHeight[2],
});
