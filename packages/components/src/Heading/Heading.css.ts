import { recipe } from '@vanilla-extract/recipes';

import { vars } from '~styles/global.css';

export const headingClassName = recipe({
  base: {
    fontFamily: vars.fonts.display.family,
    margin: 0,
    color: 'inherit',
  },
  variants: {
    size: {
      1: { fontSize: vars.fonts.display.size[1] },
      2: { fontSize: vars.fonts.display.size[2] },
      3: { fontSize: vars.fonts.display.size[3] },
      4: { fontSize: vars.fonts.display.size[4] },
    },
  },
});
