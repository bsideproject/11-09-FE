import { useEffect, useState } from 'react';
import moment from 'moment';

import { TimePicker as BTimePicker } from '@blueprintjs/datetime';

import { ReactComponent as ClockIcon } from '../assets/icons/clock.svg';
import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import { useDialog } from '../Dialog/Dialog.hooks';
import InputField from '../InputField/InputField';
import TextInput from '../TextInput/TextInput';

import { timePickerStyle } from './TimePicker.css';
import {
  TimePickerDialogFnProps,
  TimePickerDialogProps,
  TimePickerProps,
} from './TimePicker.types';

function TimePickerDialog(props: TimePickerDialogProps) {
  const { defaultValue, value: valueFromParent, onChange, onBlur } = props;
  const { isOpen, onClose } = useDialog();

  const [value, setValue] = useState<Date>(valueFromParent ?? new Date());

  useEffect(() => {
    if (!valueFromParent) {
      return;
    }
    setValue(valueFromParent);
  }, [valueFromParent]);

  const handleChange = (newTime: Date) => {
    setValue(newTime);
  };

  const handleBlur = () => {
    onBlur?.(value);
  };

  const handleOk = () => {
    onChange?.(value);
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} dialogSize={{ width: 300 }}>
      <Dialog.Content>
        <BTimePicker
          className={timePickerStyle}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          showArrowButtons
        />
      </Dialog.Content>
      <Dialog.Actions>
        <Button variant="outline" onClick={() => onClose()}>
          취소
        </Button>
        <Button background="gradient" onClick={handleOk}>
          확인
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
}
const TimePickerDialogFn = Object.assign(TimePickerDialog, {
  show: (props: TimePickerDialogFnProps) => Dialog.create(TimePickerDialog, props),
});

function TimePicker(props: TimePickerProps) {
  const { value: valueFromParent, onChange, onBlur, errorMessage } = props;

  const [value, setValue] = useState<{ date: Date; time: string }>();

  useEffect(() => {
    if (!valueFromParent) {
      return;
    }
    setValue({ date: moment(valueFromParent, 'HH:mm').toDate(), time: valueFromParent });
  }, [valueFromParent]);

  const handleChange = (selectedDate: Date) => {
    setValue({ date: selectedDate, time: moment(selectedDate).format('HH:mm') });
    onChange?.(moment(selectedDate).format('HH:mm'));
  };

  const handleBlur = (time?: Date) => {
    if (!time) {
      return;
    }
    onBlur?.(moment(time).format('HH:mm'));
  };

  const handleClick = () => {
    TimePickerDialogFn.show({ value: value?.date, onChange: handleChange, onBlur: handleBlur });
  };

  const handleReset = () => {
    setValue(undefined);
  };

  return (
    <InputField errorMessage={errorMessage}>
      <TextInput
        type="text"
        leftIcon={<ClockIcon />}
        defaultValue={value?.time ?? ''}
        key={value?.time ?? ''}
        onClick={handleClick}
        showReset
        onReset={handleReset}
      />
    </InputField>
  );
}

export default TimePicker;
