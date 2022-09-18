import { colorSystem } from '@timeletter_fe/components/src/styles/colors.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '~components/styles/global.css';
import { spacing } from '~components/styles/tools';

export const sideBarStyle = style({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100vh',
  pointerEvents: 'none',
  zIndex: 50,
});

export const backdropRecipe = recipe({
  base: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  variants: {
    visible: {
      true: { backgroundColor: 'rgba(23, 23, 23, 0.5)', display: 'block' },
      false: { backgroundColor: 'transparent', display: 'none' },
    },
  },
});

export const sideBarRecipe = recipe({
  base: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    padding: `8px ${spacing(20)} 0`,
    zIndex: 1,
    right: '0',
    backgroundColor: vars.colors.primary,
    filter: 'drop-shadow(-20px 0px 24px rgba(0, 0, 0, 0.15))',
    height: '100%',
    width: '300px',
    transition: `transform ${vars.transitions.duration.fast} ${vars.transitions.timing.easeOut}`,
    pointerEvents: 'auto',
  },
  variants: {
    visible: {
      true: { transform: 'translateX(0%)' },
      false: { transform: 'translateX(100%)' },
    },
  },
});

export const cancelIconStyle = style({
  alignSelf: 'flex-end',
  right: `${spacing(20)}`,
  height: '40px',
  width: '40px',
  color: colorSystem.white,
});

export const sideBarMenuListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginTop: 70,
  fontWeight: 700,
});

globalStyle(`${sideBarMenuListStyle} li:nth-child(4)`, { marginTop: 84 });

export const logoutStyle = style({ width: 'fit-content', marginTop: 64, fontWeight: 400 });
