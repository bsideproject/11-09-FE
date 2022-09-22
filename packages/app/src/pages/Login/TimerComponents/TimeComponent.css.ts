import { style } from '@vanilla-extract/css';

import { vars } from '~components/styles/global.css';

export const timeStyle = style({
  height: '21px',
  background: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '4px',
  fontFamily: vars.fonts.display.family,
  fontWeight: '700',
  fontSize: '13px',
  lineHeight: '23px',
  textAlign: 'center',
  color: '#FFFFFF',
  marginTop: '45%',
  padding: '0 15px',
});
