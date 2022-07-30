import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { HeadingProps } from './Heading.types';

import { headingClassName } from './Heading.css';

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { as: elementAs = 'h2', heading, size = 1, ...rest } = props;

  return createElement(
    elementAs,
    {
      ...rest,
      ref,
      className: classNames(headingClassName({ size }), rest.className),
    },
    heading,
  );
});
Heading.displayName = 'Heading';
export default Heading;
