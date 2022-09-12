import { createElement, ElementType } from 'react';
import classNames from 'classnames';

import { fontSprinkles } from '../styles/fonts.css';

import { headingSizeSprinkles, textSizeSprinkles } from './Text.css';
import { TextProps } from './Text.types';

function Text<Tag extends ElementType>(props: TextProps<Tag>) {
  const {
    as = 'div',
    color = 'black',
    size = 3,
    headingSize,
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
        headingSizeSprinkles({ headingSize, headingLineHeight: headingSize }),
        textSizeSprinkles({ size, lineHeight: size }),
        fontSprinkles({ color, fontFamily: asHeadingFont ? 'display' : undefined }),
        className,
      ),
    },
    children,
  );
}

export default Text;
