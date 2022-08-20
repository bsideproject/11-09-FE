import { style } from '@vanilla-extract/css';

export const reminderTimer = style({
  position: 'absolute',
  width: '320px',
  height: '114px',
  top: '118px',
  left: '14%',
  background: 'linear-gradient(90deg, #7848FF 0%, #DA74E3 100%)',
  borderRadius: '12px',
});

export const textSpan = style({
  top: '30px',
  height: '52px',
  position: 'absolute',
  textAlign: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  float: 'left',
});

export const textTimer = style({
  position: 'absolute',
  width: '60px',
  height: '52px',
  background: '#F2E6FF',
  borderRadius: '0px 0px 4px 4px',
  color: '#FFFFFF',
});
