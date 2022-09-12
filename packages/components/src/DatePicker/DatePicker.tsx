import { useEffect, useState } from 'react';
import moment from 'moment';

import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import Calendar from '../Calendar/Calendar';
import InputField from '../InputField/InputField';
import TextInput from '../TextInput/TextInput';

import { DatePickerProps } from './DatePicker.types';

function DatePicker(props: DatePickerProps) {
  const { defaultValue, value: valueFromParent, onChange, ...rest } = props;

  const [value, setValue] = useState<{ date: Date; formatted: string }>();

  useEffect(() => {
    if (!valueFromParent) {
      return;
    }
    setValue({ date: valueFromParent, formatted: moment(valueFromParent).format('LL') });
  }, [valueFromParent]);

  const handleChange = (selectedDate: Date) => {
    setValue({ date: selectedDate, formatted: moment(selectedDate).format('LL') });
    onChange(selectedDate);
  };

  const handleClick = () => {
    Calendar.show({ defaultValue, value: valueFromParent ?? value?.date, onChange: handleChange });
  };

  const handleReset = () => {
    setValue(undefined);
  };

  return (
    <InputField {...rest}>
      <TextInput
        type="text"
        defaultValue={value?.formatted ?? ''}
        key={value?.formatted ?? ''}
        onClick={handleClick}
        showReset
        leftIcon={<CalendarIcon />}
        style={{ textAlign: 'center' }}
        onReset={handleReset}
      />
    </InputField>
  );
}

export default DatePicker;
