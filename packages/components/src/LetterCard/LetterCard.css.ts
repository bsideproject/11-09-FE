import { style } from '@vanilla-extract/css';

import { vars } from '../styles/global.css';
import { spacing } from '../styles/tools';

export const letterCardStyle = style({
  width: '100%',
  maxHeight: '153px',
  padding: `16px ${spacing(16)}`,
  background: vars.colors.white,
  borderRadius: '12px',

  '@media': { 'screen and (max-width: 360px)': { padding: '16px' } },
});

export const letterImageWrapperStyle = style({
  flex: '0 0 48px',
  display: 'inline-flex',
  alignItems: 'center',
  height: '48px',
  borderRadius: 10,
  backgroundColor: vars.colors.gray100,
  overflow: 'hidden',
});

export const letterImageStyle = style({
  width: '100%',
  height: '100%',
});

export const letterContentWrapperStyle = style({
  flex: '1 1 auto',
  overflow: 'hidden',
});

export const letterContentStyle = style({
  flex: '1 1 auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
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
