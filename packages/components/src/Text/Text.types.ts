import { ComponentPropsWithoutRef, ElementType } from 'react';

import { FontSprinkles } from '../styles/fonts.css';

import { textSprinkles } from './Text.css';

export type TextSprinkles = Parameters<typeof textSprinkles>[0];

export type TextProps<Tag extends ElementType> = ComponentPropsWithoutRef<Tag> & {
  as?: Tag;
  asHeadingFont?: boolean;
  color?: FontSprinkles['color'];
  size?: TextSprinkles['fontSize'];
};
