import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from './global.css';
import { createOutlineGradientBackgroundImage, important } from './tools';

export const outlineLinearGradientVar = createVar();

export const gradientOutlineRecipe = recipe({
  base: {
    vars: { [outlineLinearGradientVar]: vars.colors.gradientDark },
    border: important('1px solid transparent'),
    backgroundOrigin: important('border-box'),
    backgroundClip: important('padding-box, border-box'),
    borderImageSlice: important(1),
  },
  variants: {
    background: {
      black: {
        backgroundImage: important(
          createOutlineGradientBackgroundImage(vars.colors.black, outlineLinearGradientVar),
        ),
      },
      white: {
        backgroundImage: important(
          createOutlineGradientBackgroundImage(vars.colors.white, outlineLinearGradientVar),
        ),
      },
    },
  },
});
