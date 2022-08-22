import { ReactElement } from 'react';

export interface InputFieldProps {
  className?: string;
  label?: string;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
  errorMessage?: string;
}
