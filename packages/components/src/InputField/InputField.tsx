import { cloneElement, isValidElement, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { ReactComponent as CautionIcon } from '../assets/icons/caution.svg';
import Text from '../Text/Text';

import { inputFieldContentRecipe, inputFieldErrorStyle, inputFieldStyle } from './InputField.css';
import { InputFieldProps } from './InputField.types';

function InputField(props: PropsWithChildren<InputFieldProps>) {
  const { className, label, errorMessage, children } = props;

  return (
    <div className={classNames(inputFieldStyle, className)}>
      {label && <label htmlFor={label}>{label}</label>}
      {isValidElement(children) &&
        cloneElement(children, {
          className: inputFieldContentRecipe({ error: !!errorMessage }),
          name: label,
        })}
      {errorMessage && (
        <Text className={inputFieldErrorStyle} as="span" color="error" size={1}>
          <CautionIcon /> {errorMessage}
        </Text>
      )}
    </div>
  );
}

export default InputField;
