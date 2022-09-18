import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '~components/styles/global.css';
import { spacing } from '~components/styles/tools';

export const letterContentStyle = style({
  overflow: 'auto',
  width: '100%',
  height: '100%',
  padding: `24px ${spacing(20)}`,
});

export const tabStyle = style({
  position: 'relative',
  height: '40px',

  '::after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: -2,
    display: 'block',
    width: '100%',
    height: '2px',
  },
});

export const tabRecipe = recipe({
  variants: {
    active: {
      true: {
        '::after': {
          background: vars.colors.gradientDark,
        },
      },
      false: {
        '::after': {
          background: vars.colors.gray900,
        },
      },
    },
  },
});
