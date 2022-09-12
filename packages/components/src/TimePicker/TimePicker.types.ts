import { TimePickerProps as BTimePickerProps } from '@blueprintjs/datetime';

import { InputFieldProps } from '../InputField/InputField.types';

export type TimePickerDialogProps = BTimePickerProps;

export interface TimePickerProps extends Pick<InputFieldProps, 'label' | 'errorMessage'> {
  value: string;
  onChange: (time: string) => void;
}

export type TimePickerDialogFnProps = Pick<
  TimePickerDialogProps,
  'defaultValue' | 'value' | 'onChange'
>;
