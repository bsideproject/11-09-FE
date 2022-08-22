import { HTMLAttributes, ReactNode } from 'react';

import { FontSprinkles } from '../styles/fonts.css';

import { headingSprinkles } from './Heading.css';

type HeadingSprinkles = Parameters<typeof headingSprinkles>[0];

export type HeadingTagName = Extract<
  keyof HTMLElementTagNameMap,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  heading?: ReactNode;
  as?: HeadingTagName;
  size?: HeadingSprinkles['size'];
  color?: FontSprinkles['color'];
}
