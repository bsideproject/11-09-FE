import { DatePickerProps } from '@blueprintjs/datetime';

export interface CalendarProps
  extends Pick<DatePickerProps, 'defaultValue' | 'minDate' | 'maxDate' | 'onChange' | 'value'> {
  showToday?: boolean;
}
