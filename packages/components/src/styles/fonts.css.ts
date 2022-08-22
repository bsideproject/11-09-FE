import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { colorSystem } from './colors.css';

const baseFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export const fontSystem = {
  display: {
    family: `PyeongChangPeace, ${baseFontFamily}`,
    size: {
      1: '16px',
      2: '20px',
      3: '24px',
      4: '68px',
    },
    lineHeight: {
      1: '24px',
      2: '32px',
      3: '36px',
      4: '88px',
    },
  },
  body: {
    family: `Pretendard, ${baseFontFamily}`,
    size: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
    },
    lineHeight: {
      1: '18px',
      2: '20px',
      3: '24px',
      4: '30px',
    },
  },
};

export const fontProperties = defineProperties({
  properties: {
    fontFamily: { display: fontSystem.display.family },
    fontWeight: {
      regular: 400,
      bold: 600,
    },
    color: colorSystem,
  },
});

export const fontSprinkles = createSprinkles(fontProperties);
export type FontSprinkles = Parameters<typeof fontSprinkles>[0];
