import { ComponentPropsWithoutRef, ElementType } from 'react';

import { FontSprinkles } from '../styles/fonts.css';

import { headingSizeSprinkles, textSizeSprinkles } from './Text.css';

export type TextSizeSprinkles = Parameters<typeof textSizeSprinkles>[0];
export type HeadingSizeSprinkles = Parameters<typeof headingSizeSprinkles>[0];

export type TextProps<Tag extends ElementType> = ComponentPropsWithoutRef<Tag> & {
  as?: Tag;
  asHeadingFont?: boolean;
  color?: FontSprinkles['color'];
  size?: TextSizeSprinkles['fontSize'];
  headingSize?: HeadingSizeSprinkles['headingSize'];
};
