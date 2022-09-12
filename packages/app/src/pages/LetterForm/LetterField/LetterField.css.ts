import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

const letterPreviewSize = '48px';
const textareaPaddingY = '14px';

export const letterTextareaHeaderStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0 12px',
});

export const letterTextareaStyle = style({
  flex: '1 1 auto',
  width: '100%',
  padding: `${textareaPaddingY} 16px`,
  overflow: 'auto',
  backgroundColor: vars.colors.gray900,
  borderRadius: '13px',
  resize: 'none',
  color: vars.colors.white,

  '::-webkit-scrollbar': { width: '15px' },
  '::-webkit-scrollbar-thumb': {
    border: '6px solid transparent',
    borderTopWidth: textareaPaddingY,
    borderBottomWidth: textareaPaddingY,
    borderRadius: '6px',
    backgroundColor: vars.colors.gray700,
    backgroundClip: 'content-box',
  },
});

export const letterPreviewStyle = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: letterPreviewSize,
  height: letterPreviewSize,
  marginTop: 14,
  borderRadius: '10px',
  overflow: 'hidden',
});

globalStyle(`${letterPreviewStyle} label`, {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  borderRadius: '10px',
  border: `1px solid ${vars.colors.white}`,
});

globalStyle(`${letterPreviewStyle} input[type="file"]`, {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  border: 0,
});

export const letterPreviewImageStyle = style({
  width: letterPreviewSize,
  // height: 'auto',
  maxWidth: letterPreviewSize,
});
