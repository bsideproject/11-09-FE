import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const oneTag = style({
  position: 'absolute',
  left: '22px',
  right: '0%',
  top: '40px',
  bottom: '0%',
  width: '68px',
  height: '68px',
  background:
    'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 47.92%, rgba(255, 255, 255, 0.405) 100%)',
  backdropFilter: 'blur(4px)',
  borderRadius: '34px',
});

export const mainBox = recipe({
  base: {
    width: '312px',
    height: '200px',
    left: '65px',
    color: '#FFFFFF',
    pointerEvents: 'all',
    background: 'linear-gradient(239.91deg, #7848FF -8.78%, #E28EFF 74.55%)',
    filter: 'drop-shadow(0px 4px 14px #2E1168)',
    borderRadius: '16px',
    marginTop: '25px',
  },
  variants: {
    value: {
      true: { transform: 'scale(1)' },
      false: { transform: 'scale(1.1)' },
    },
  },
});

export const spanTag = style({
  position: 'absolute',
  width: '150px',
  height: '36px',
  left: '22px',
  top: '120px',
});

export const arrowLarge = style({
  position: 'absolute',
  width: '80px',
  height: '80px',
  left: '200px',
  top: '55px',
});
