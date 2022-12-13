import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const mainBoxRecipe = recipe({
  base: {
    width: '340px',
    height: '228px',
    filter: 'drop-shadow(0px 4px 14px #1E3026)',
    margin: '10px auto',
    alignContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'center',
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


export const imageBoxStyle = style({
  flexBasis: '35%',
  paddingLeft: '8%',
});

export const oneTagStyle = style({
  background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 47.92%, rgba(255, 255, 255, 0.405) 100%)',
  backdropFilter: 'blur(4px)',
  borderRadius: '34px',
});

export const menuTextStyle = style({
  paddingLeft: '45%',
  marginBottom: '15%',
});

export const arrowLargeStyle = style({
  width: '80px',
  height: '82px',
  flexBasis: '100%',
  paddingLeft: '170px',
  marginBottom: 5,
  transform: 'translateY(25%)',
});
