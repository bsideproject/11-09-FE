import { globalStyle } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../styles/global.css';

const textSizeProperties = defineProperties({
  properties: {
    fontSize: vars.fonts.body.size,
    lineHeight: vars.fonts.body.lineHeight,
  },
  shorthands: { size: ['fontSize'] },
});

const headingSizeProperties = defineProperties({
  properties: {
    fontSize: vars.fonts.display.size,
    lineHeight: vars.fonts.display.lineHeight,
  },
  shorthands: { headingSize: ['fontSize'], headingLineHeight: ['lineHeight'] },
});

export const textSizeSprinkles = createSprinkles(textSizeProperties);
export const headingSizeSprinkles = createSprinkles(headingSizeProperties);

globalStyle('p', { margin: 0 });
