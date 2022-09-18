import { style } from '@vanilla-extract/css';

import { colorSystem } from '~components/styles/colors.css';
import { vars } from '~components/styles/global.css';
import { createHexWithOpacity, setStackOrder, spacing } from '~components/styles/tools';

const letterPopoverStackOrder = setStackOrder('custom', 10);

export const letterPopoverOverlayStyle = style({
  position: 'absolute',
  top: '0',
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: createHexWithOpacity(colorSystem.black, 70),
  zIndex: letterPopoverStackOrder,
});

export const letterPopoverStyle = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 'calc(100% - 60px)',
  backgroundColor: vars.colors.white,
  zIndex: letterPopoverStackOrder,
});

export const letterPopoverCloseStyle = style({
  position: 'absolute',
  top: '-40px',
  right: 20,
  width: 30,
  height: 30,
});

export const letterPopoverContentStyle = style({
  padding: `16px ${spacing(20)} 20px`,
});
