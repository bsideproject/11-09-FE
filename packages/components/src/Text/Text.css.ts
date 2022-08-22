import { globalStyle } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../styles/global.css';

const textProperties = defineProperties({
  properties: {
    fontSize: vars.fonts.body.size,
    lineHeight: vars.fonts.body.lineHeight,
  },
  shorthands: { size: ['fontSize'] },
});

export const textSprinkles = createSprinkles(textProperties);

globalStyle('p', { margin: 0 });
