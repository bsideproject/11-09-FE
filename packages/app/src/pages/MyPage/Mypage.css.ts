import { style } from '@vanilla-extract/css';

export const myPageBodyStyle = style({
  flex: '1 1',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 20px',
});

export const myPageBodyContentStyle = style({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  marginBottom: '20%'
});

export const myPageUserContent = style({
  fontSize: 16,
  lineHeight: 18,
  marginTop: 5,
});

export const myPageBodyBottomStyle = style({ marginBottom: 20 });
