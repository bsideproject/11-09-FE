import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../styles/global.css';

export const headingStyle = style({
  fontFamily: vars.fonts.display.family,
  margin: 0,
});

const headingProperties = defineProperties({
  properties: {
    fontSize: vars.fonts.display.size,
    lineHeight: vars.fonts.display.lineHeight,
  },
  shorthands: { size: ['fontSize'] },
});

export const headingSprinkles = createSprinkles(headingProperties);
