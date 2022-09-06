import { style } from '@vanilla-extract/css';

export const letterBoxStyle = style({
  padding: 15,
  minHeight: 130,
  width: '100%',
  height: 'auto',
  margin: '25px auto',
  display:'flex',
  flexDirection:'column',
  borderRadius: '12px',
});

export const letterContentStyle = style({
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: 400,
  color: '#FFFFFF',
  fontSize: 14,
  padding: '10px 0px',
  lineHeight: '20px',
});

export const letterFromTextStyle = style({margin: '0 0 0 auto',});

