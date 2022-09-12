import { CalendarProps } from '../Calendar/Calendar.types';
import { InputFieldProps } from '../InputField/InputField.types';

export interface DatePickerProps
  extends Omit<CalendarProps, 'onChange'>,
    Pick<InputFieldProps, 'label' | 'errorMessage'> {
  onChange: (date: Date) => void;
}
