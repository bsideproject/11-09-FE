import classNames from 'classnames';
import NumberFormat from 'react-number-format';

import { inputStyle } from '../styles/input.css';
import TextInput from '../TextInput/TextInput';

import { NumberInputProps } from './NumberInput.types';

function NumberInput(props: NumberInputProps) {
  const { className, type, value, onChange, ...rest } = props;

  return (
    <NumberFormat
      {...rest}
      className={classNames(inputStyle, className)}
      value={value}
      onChange={onChange}
      customInput={TextInput}
      format={type === 'tel' ? '### - #### - ####' : undefined}
      thousandSeparator={type === 'number'}
    />
  );
}

export default NumberInput;
