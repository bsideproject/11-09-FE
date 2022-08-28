import { cloneElement, isValidElement } from 'react';
import classNames from 'classnames';

import { gradientOutlineRecipe } from '../styles/gradient.css';

import { ButtonNext, ButtonPrev } from './ButtonPrevNext/ButtonPrevNext';
import { buttonRecipe, buttonSprinkles, buttonStackOrderStyle, buttonStyle } from './Button.css';
import { ButtonProps, IconOnlyProps, WithIconProps } from './Button.types';
import { getBackground } from './Button.utils';

function Button(props: IconOnlyProps): JSX.Element;
function Button(props: WithIconProps): JSX.Element;
function Button(props: ButtonProps) {
  const {
    type = 'button',
    size: sizeFromParent = 'large',
    children,
    iconPosition = 'right',
    iconOnly,
    label,
    variant: variantFromParent,
    background: backgroundFromParent,
    borderColor: borderColorFromParent,
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
    isValidElement(children) && cloneElement(children, { className: buttonStackOrderStyle });

  return (
    <button
      {...rest}
      type={type}
      className={classNames(
        buttonStyle,
        buttonRecipe({ size, variant }),
        buttonSprinkles({
          width,
          height: size,
          background,
          borderColor: 'borderColor' in props ? borderColor : undefined,
        }),
        borderColor === 'gradient' && gradientOutlineRecipe({ background: 'white' }),
        rest.className,
      )}
    >
      {iconPosition === 'left' && iconElement}
      {label && <span className={buttonStackOrderStyle}>{label}</span>}
      {iconPosition === 'right' && iconElement}
    </button>
  );
}

export default Object.assign(Button, { Prev: ButtonPrev, Next: ButtonNext });
