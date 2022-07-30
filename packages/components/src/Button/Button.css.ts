import { recipe } from '@vanilla-extract/recipes';

export const buttonClassName = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    size: {
      large: {
        width: '64px',
        height: '64px',
        borderRadius: '16px',
      },
      medium: {
        width: '60px',
        height: '60px',
        borderRadius: '14px',
      },
      small: {
        width: '54px',
        height: '54px',
        borderRadius: '20px',
      },
    },
  },
});
