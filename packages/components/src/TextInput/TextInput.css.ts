import { style } from '@vanilla-extract/css';

export const inputWrapperStyle = style({
  position: 'relative',
});

export const inputLeftIconStyle = style({
  position: 'absolute',
  top: '50%',
  left: '20px',
  transform: 'translateY(-50%)',
});

export const inputRightIconStyle = style({
  position: 'absolute',
  top: '50%',
  right: 12,
  width: 20,
  height: 20,
  padding: 0,
  borderRadius: '50%',
  transform: 'translateY(-50%)',
});

export const inputWithIconStyle = style({
  textAlign: 'center',
});
