import classNames from 'classnames';

import { ButtonProps } from './Button.types';

import { buttonClassName } from './Button.css';

function Button(props: ButtonProps) {
  const { size = 'large', label, ...rest } = props;

  return (
    <button
      {...rest}
      type="button"
      className={classNames(buttonClassName({ size }), rest.className)}
    >
      {label}
    </button>
  );
}

export default Button;
