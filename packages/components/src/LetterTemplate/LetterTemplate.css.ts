import { style } from '@vanilla-extract/css';

import { vars } from '../styles/global.css';
import { gradientOutlineRecipe, outlineLinearGradientVar } from '../styles/gradient.css';
import { layoutSprinkles } from '../styles/layout.css';
import { spacing } from '../styles/tools';

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

export const letterImageWrapperStyle = style({
  aspectRatio: '12 / 9',
  overflow: 'hidden',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius,
});

export const letterImageStyle = style({
  width: 'auto',
  height: '100%',
});
