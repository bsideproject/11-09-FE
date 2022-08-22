import classNames from 'classnames';

import { ButtonNext, ButtonPrev } from './ButtonPrevNext/ButtonPrevNext';
import { buttonRecipe, buttonSprinkles, buttonStyle } from './Button.css';
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
    variant = 'solid',
    background: backgroundFromParent,
    borderColor: borderColorFromParent,
    ...rest
  } = props;

  const width = iconOnly ? sizeFromParent : 'parent';
  const background = getBackground(
    variant,
    'background' in props ? backgroundFromParent : undefined,
  );
  const borderColor = variant === 'outline' ? borderColorFromParent : undefined;
  const size = variant === 'transparent' ? 'custom' : sizeFromParent;

  // TODO 아래 문제 타입 에러가 왜 나는지 확인 필요
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
        rest.className,
      )}
    >
      {iconPosition === 'left' && children}
      {label}
      {iconPosition === 'right' && children}
    </button>
  );
}

export default Object.assign(Button, { Prev: ButtonPrev, Next: ButtonNext });
