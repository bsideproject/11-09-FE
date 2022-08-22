import classNames from 'classnames';

import { ReactComponent as ArrowGradientPrev } from '../../assets/images/arrow-gradient-back.svg';
import { ReactComponent as ArrowGradientNext } from '../../assets/images/arrow-gradient-front.svg';
import { gradientOutlineRecipe } from '../../styles/gradient.css';
import Button from '../Button';

import { buttonNextStyle, buttonPrevStyle } from './ButtonPrevNext.css';
import { ButtonNextProps } from './ButtonPrevNext.types';

export function ButtonPrev(props: ButtonNextProps) {
  const { className, ...rest } = props;

  return (
    <Button
      {...rest}
      className={classNames(
        buttonPrevStyle,
        gradientOutlineRecipe({ background: 'black' }),
        className,
      )}
      borderColor="gradient"
    >
      <ArrowGradientPrev />
    </Button>
  );
}

export function ButtonNext(props: ButtonNextProps) {
  const { className, ...rest } = props;
  return (
    <Button
      {...rest}
      className={classNames(
        buttonNextStyle,
        gradientOutlineRecipe({ background: 'black' }),
        className,
      )}
      borderColor="gradient"
    >
      <ArrowGradientNext />
    </Button>
  );
}
