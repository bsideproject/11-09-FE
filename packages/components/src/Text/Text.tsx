import { createElement, ElementType } from 'react';
import classNames from 'classnames';

import { fontSprinkles } from '../styles/fonts.css';

import { textSprinkles } from './Text.css';
import { TextProps } from './Text.types';

function Text<Tag extends ElementType>(props: TextProps<Tag>) {
  const {
    as = 'div',
    color = 'black',
    size = 3,
    asHeadingFont = false,
    children,
    className,
    ...rest
  } = props;

  return createElement(
    as,
    {
      ...rest,
      className: classNames(
        textSprinkles({ size, lineHeight: size }),
        fontSprinkles({ color, fontFamily: asHeadingFont ? 'display' : undefined }),
        className,
      ),
    },
    children,
  );
}

export default Text;
