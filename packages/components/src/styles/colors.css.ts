import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

export const colorSystem = {
  primary: '#8055FA',
  primaryLight: '#EBE4FF',
  secondary: '#84FDD1',
  black: '#26242E',
  white: '#FFFFFF',
  yellow: '#FEE500',
  error: '#FF4B8C',
  gray900: '#444249',
  gray700: '#828187',
  gray500: '#C1C1C1',
  gray300: '#E8E8E8',
  gray100: '#F8F8F8',
};

export const backgroundColorSystem = {
  ...colorSystem,
  gradientDark: 'linear-gradient(90deg, #7848FF 0%, #DA74E3 100%)',
  invertedGradientDark: 'linear-gradient(-90deg, #7848FF 0%, #DA74E3 100%)',
  gradientLight: 'linear-gradient(90deg, #A788FF 0%, #F5B5FF 100%)',
};

const colorProperties = defineProperties({
  properties: {
    color: colorSystem,
    backgroundColor: backgroundColorSystem,
  },
});

export const colors = createSprinkles(colorProperties);
export type Colors = Parameters<typeof colors>[0];
