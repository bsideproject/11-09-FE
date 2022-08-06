import { isValidElement } from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.types';
import { getBackground } from './Button.utils';

import { buttonClassName, buttonSprinkles } from './Button.css';

function Button(props: ButtonProps) {
  const {
    type = 'button',
    size = 'large',
    children,
    iconPosition = 'right',
    iconOnly: iconOnlyFromParent = false,
    label,
    variant = 'solid',
    background: backgroundFromParent,
    borderColor: borderColorFromParent,
    ...rest
  } = props;

  const iconOnly = iconOnlyFromParent || (!label && isValidElement(children) && typeof children !== 'string');
  const width = iconOnly ? size : 'parent';
  const background = getBackground(variant, backgroundFromParent);
  const borderColor = variant === 'outline' ? borderColorFromParent : undefined;

  return (
    <button
      {...rest}
      type={type}
      className={classNames(
        buttonClassName({ size, variant }),
        buttonSprinkles({
          width,
          height: size,
          background,
          borderColor,
        }),
        rest.className,
      )}
    >
      {iconPosition === 'left' && children}
      {label}
      {iconPosition === 'right' && children}
    </button>
  );
}

export default Button;
