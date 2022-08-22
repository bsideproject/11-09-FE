import classNames from 'classnames';

import { inputStyle } from '../styles/input.css';

import { TextInputProps } from './TextInput.types';

function TextInput(props: TextInputProps) {
  const { className, type, ...rest } = props;
  return <input className={classNames(inputStyle, className)} type={type} {...rest} />;
}

export default TextInput;
