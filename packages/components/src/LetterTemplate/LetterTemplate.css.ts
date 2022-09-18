import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../styles/global.css';
import { gradientOutlineRecipe, outlineLinearGradientVar } from '../styles/gradient.css';
import { layoutSprinkles } from '../styles/layout.css';
import { important, spacing } from '../styles/tools';

const borderRadius = 12;
const flexColumn = layoutSprinkles({ display: 'flex', flex: 'column' });

export const letterTemplateStyle = style([flexColumn, { gap: 20 }]);

export const letterContentStyle = style([
  flexColumn,
  {
    vars: { [outlineLinearGradientVar]: vars.colors.gradientLight },
    gap: 16,
    padding: `${spacing(16)}`,
    borderRadius,
  },
  gradientOutlineRecipe({ background: 'black' }),
]);

export const letterContentRecipe = recipe({
  variants: {
    border: {
      false: {
        border: important(0),
      },
    },
    theme: {
      light: {
        backgroundImage: important('none'),
      },
      dark: {},
    },
  },
});
