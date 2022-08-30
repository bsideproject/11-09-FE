import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const mainBoxRecipe = recipe({
  base: {
    width: '340px',
    height: '228px',
    filter: 'drop-shadow(0px 4px 14px #2E1168)',
    margin: '10px auto',
    alignContent: 'center',
    display: 'Flex',
    flexWrap: 'wrap',
  },
  variants: {
    value: {
      true: { transform: 'scale(1)' },
      false: { transform: 'scale(1.1)' },
    },
  },
});

export const boxImgStyle = style({
  borderRadius: '16px',
  position: 'absolute',
  zIndex: -1,
});

export const oneTagStyle = style({
  flexBasis: '35%',
  paddingLeft: '8%',
});

export const menuTextStyle = style({
  paddingLeft: '9%',
  marginBottom: '5%',
});

export const arrowLargeStyle = style({
  width: '80px',
  height: '82px',
  flexBasis: '65%',
  paddingLeft: '80px',
  transform: 'translateY(25%)',
});
