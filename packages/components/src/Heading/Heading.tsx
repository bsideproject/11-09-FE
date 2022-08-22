import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { fontSprinkles } from '../styles/fonts.css';

import { headingSprinkles, headingStyle } from './Heading.css';
import { HeadingProps } from './Heading.types';

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { as: elementAs = 'h2', size = 1, color = 'black', heading, children, ...rest } = props;

  return createElement(
    elementAs,
    {
      ...rest,
      ref,
      className: classNames(
        headingStyle,
        headingSprinkles({ size }),
        fontSprinkles({ color }),
        rest.className,
      ),
    },
    heading || children,
  );
});
Heading.displayName = 'Heading';
export default Heading;
