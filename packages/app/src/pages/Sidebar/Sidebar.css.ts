import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '~components/styles/global.css';

export const Nav = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '52px',
  verticalAlign: 'middle',
  justifyContent: 'center',
  color: '#FFFFFF',
  top: '0',
});

export const titleText = recipe({
  base: {
    margin: 0,
    color: 'inherit',
  },
  variants: {
    font: {
      1: {
        fontFamily: vars.fonts.display.family,
        fontSize: vars.fonts.display.size[3],
      },
      2: { fontSize: vars.fonts.body.size[3] },
      3: { display: 'none' },
    },
  },
});

export const openIcon = recipe({
  base: {
    position: 'absolute',
    transform: 'translateY(27%)',
    right: '10%',
    height: '20px',
    width: '20px',
  },
  variants: {
    display: {
      1: {},
      2: { display: 'none' },
      3: { display: 'none' },
    },
  },
});

export const backIcon = recipe({
  base: {
    position: 'absolute',
    left: '10%',
    height: '15px',
    width: '15px',
  },
  variants: {
    display: {
      1: { display: 'none' },
      2: {},
      3: {},
    },
  },
});

export const barColor = recipe({
  base: {
    position: 'fixed',
    top: '0px',
    width: '100%',
    maxWidth: '280px',
    height: '100vh',
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    transition: 'transform 0.5s ease 0s',
  },
  variants: {
    open: {
      true: {
        backgroundColor: 'rgba(23, 23, 23, 0.5)',
        overflow: 'visible',
        zIndex: '1',
      },
      false: { zIndex: '0', backgroundColor: 'rgba(0, 0, 0, 0)', overflow: 'hidden' },
    },
  },
});

export const sideBar = recipe({
  base: {
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row nowrap',
    backgroundColor: '#8055FA',
    position: 'fixed',
    filter: 'drop-shadow(-20px 0px 24px rgba(0, 0, 0, 0.15))',
    top: '0',
    right: '0',
    height: '100vh',
    width: '300px',
    transition: 'transform 0.3s ease-in-out',
  },
  variants: {
    open: {
      true: { transform: 'translateX(0%)' },
      false: { transform: 'translateX(100%)' },
    },
  },
});

export const cancelIcon = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  position: 'fixed',
  filter: 'drop-shadow(-20px 0px 24px rgba(0, 0, 0, 0.15))',
  top: '2.5%',
  right: '15%',
  height: '20px',
  width: '20px',
  transition: 'transform 0.3s ease-in-out',
});

export const ulstyle = style({
  listStyle: 'none',
  display: 'flex',
  float: 'right',
  paddingLeft: 30,
  alignContent: 'flex-start',
  flexDirection: 'column',
  paddingTop: '5rem',
  flexWrap: 'wrap',
  width: '100%',
});

export const liStyle = recipe({
  base: {
    color: '#FFFFFF',
    fontWeight: '700',
    lineHeight: '30px',
    letterSpacing: '0em',
    paddingTop: 20,
    textAlign: 'left',
    selectors: {
      '&:nth-child(4n)': {
        marginTop: '50px',
        letterSpacing: '0em',
      },
      '&:nth-child(6n)': {
        marginTop: '50px',
        letterSpacing: '0em',
      },
    },
  },
  variants: {
    divId: {
      1: { fontSize: vars.fonts.body.size[4] },
      2: { fontSize: vars.fonts.body.size[2] },
      3: { fontSize: vars.fonts.body.size[2] },
    },
  },
});
