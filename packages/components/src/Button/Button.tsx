import { cloneElement, isValidElement } from 'react';
import classNames from 'classnames';

import { gradientOutlineRecipe } from '../styles/gradient.css';

import { ButtonNext, ButtonPrev } from './ButtonPrevNext/ButtonPrevNext';
import {
  buttonChildrenStyle,
  buttonRecipe,
  buttonSprinkles,
  buttonStackOrderStyle,
  buttonStyle,
} from './Button.css';
import { ButtonProps, IconOnlyProps, WithChildrenProps, WithIconProps } from './Button.types';
import { getBackground } from './Button.utils';

// TODO Refactor Button component
function Button(props: IconOnlyProps): JSX.Element;
function Button(props: WithIconProps): JSX.Element;
function Button(props: WithChildrenProps): JSX.Element;
function Button(props: ButtonProps) {
  const {
    type = 'button',
    size: sizeFromParent = 'large',
    children,
    childrenClassName,
    childrenStyle,
    iconOnly,
    iconOnlySize,
    label,
    variant: variantFromParent,
    background: backgroundFromParent,
    borderColor: borderColorFromParent,
    disabled,
    ...rest
  } = props;

  const variant =
    backgroundFromParent && !variantFromParent ? undefined : variantFromParent || 'solid';
  const width = iconOnly ? sizeFromParent : 'parent';
  const size = variant === 'transparent' ? 'custom' : sizeFromParent;
  const borderColor = variant === 'outline' ? borderColorFromParent : undefined;
  const background = getBackground(
    variant,
    'background' in props ? backgroundFromParent : undefined,
  );

  const iconElement =
    isValidElement(children) &&
    cloneElement(children, {
      className: classNames(buttonStackOrderStyle, children.props.className),
      style: { width: iconOnlySize, height: iconOnlySize },
    });
  const element = iconOnly ? (
    iconElement
  ) : (
    <span
      className={classNames(buttonChildrenStyle, buttonStackOrderStyle, childrenClassName)}
      style={childrenStyle}
    >
      {children}
    </span>
  );

  return (
    <button
      {...rest}
      type={type}
      className={classNames(
        buttonStyle,
        buttonRecipe({ size, variant, disabled }),
        buttonSprinkles({
          width,
          height: size,
          background,
          borderColor: 'borderColor' in props ? borderColor : undefined,
        }),
        borderColor === 'gradient' && gradientOutlineRecipe({ background: 'white' }),
        rest.className,
      )}
      disabled={disabled}
    >
      {label && <span className={buttonStackOrderStyle}>{label}</span>}
      {children && element}
    </button>
  );
}

export default Object.assign(Button, { Prev: ButtonPrev, Next: ButtonNext });
