import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

import { ReactComponent as ResetIcon } from '../assets/icons/reset.svg';
import Button from '../Button/Button';
import { inputStyle } from '../styles/input.css';

import {
  inputLeftIconStyle,
  inputRightIconStyle,
  inputWithIconStyle,
  inputWrapperStyle,
} from './TextInput.css';
import { TextInputProps } from './TextInput.types';

function TextInput(props: TextInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { className, type, leftIcon, showReset, onReset, ...rest } = props;

  return (
    <div className={inputWrapperStyle}>
      {leftIcon && <i className={inputLeftIconStyle}>{leftIcon}</i>}
      <input
        {...rest}
        ref={ref}
        className={classNames(inputStyle, { [inputWithIconStyle]: leftIcon }, className)}
        type={type}
      />
      {rest.value && showReset && (
        <Button className={inputRightIconStyle} variant="transparent" iconOnly onClick={onReset}>
          <ResetIcon />
        </Button>
      )}
    </div>
  );
}

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
