import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '~components/styles/global.css';

export const loginBodyStyle = recipe({
  base: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '::-webkit-scrollbar': { display: 'none' },
  },
  variants: {
    visible: {
      true: { height: '100%' },
      false: {
        height: '100',
      },
    },
  },
})


export const sliderStyle = style({
    width: '80%',
    display: 'flex',
    height: '500px',
    alignContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
});

export const loginBodyStyle2 = style({
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
});


export const loginIconStyle = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const loginTextBodyStyle = style({
  paddingTop: 'calc((240 / 600) * 100%)',
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
});

export const kakaoLoginStyle = recipe({
  base: {
    height: '64px',
    width: '80%',
    top: 330,
    position: 'absolute',
  },
  variants: {
    visible: {
      true: { display: 'inline' },
      false: { display: 'none' },
    },
  },
});
export const kakaoLoginStyle2 = style({
  height: '64px',
  width: '80%',
  position: 'absolute',
  display: 'inline'
});

export const txtBottomStyle = style({
  height: '40px',
  lineHeight: '20px',
  textAlign: 'center',
  marginTop: '5%',
  color: '#26242E',
});

export const linkBottomStyle = style({
  height: '18px',
  fontWeight: '700',
  fontSize: vars.fonts.body.size[1],
  lineHeight: '18px',
  display: 'inline-flex',
  gap: 10,
  textAlign: 'center',
  color: '#26242E',
  marginTop: '5%',
  zIndex: 1,
});

export const moreBtnStyle = style({
  position: 'absolute',
  width: '200px',
  height: '100px',
  borderRadius: '20px',
  top: 450
});

export const text1Recipe = recipe({
  base: {
    width: '200px',
    height: '100px',
    top: 500,
    position: 'absolute',
    textAlign: 'center',
  },
  variants: {
    visible: {
      true: { display: 'none' },
      false: { display: 'inline' },
    },
  },
});

export const text1Recip2 = recipe({
  base: {
    width: '200px',
    height: '100px',
    top: 410,
    position: 'absolute',
  },
  variants: {
    visible: {
      true: { display: 'none' },
      false: { display: 'inline' },
    },
  },
});


globalStyle('.slick-slider ', {
  width: '80%',
  display: 'flex',
  alignContent: 'center',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
});

globalStyle('.slick-initialized .slick-slide > div > div', {
  all:'unset',
  display: 'flex',
  justifyContent: 'center',
});

globalStyle('.slick-initialized .slick-slide > div > div >  svg', {
      width: '100%',
});   

