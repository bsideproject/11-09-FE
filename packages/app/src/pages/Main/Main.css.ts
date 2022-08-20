import { style } from '@vanilla-extract/css';

export const mainBody = style({
  width: '100%',
  top: '50%',
  left: '50%',
  position: 'absolute',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
});
