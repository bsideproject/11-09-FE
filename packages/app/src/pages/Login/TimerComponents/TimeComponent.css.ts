import { style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

export const timeStyle = style({
  position: 'absolute',
  width: '132px',
  height: '21px',
  background: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '4px',
  fontFamily: vars.fonts.display.family,
  fontWeight: '700',
  fontSize: '13px',
  lineHeight: '23px',
  textAlign: 'center',
  color: '#FFFFFF',
  top: 205,
});
