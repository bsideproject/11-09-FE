import { useState } from 'react';
import moment from 'moment';

import { DatePicker } from '@blueprintjs/datetime';

import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import { useDialog } from '../Dialog/Dialog.hooks';

import { calendarActionsStyle, calendarStyle, calendarWrapperStyle } from './Calendar.css';
import { CalendarProps } from './Calendar.types';

function Calendar(props: CalendarProps) {
  const { defaultValue, value, onChange, showToday = true } = props;
  const { isOpen, onClose } = useDialog();

  const [date, setDate] = useState({ selectedDate: value ?? new Date(), isUserChange: false });

  const handleChange = (selectedDate: Date, isUserChange: boolean) => {
    setDate({ selectedDate, isUserChange });
  };

  const handleOk = () => {
    onChange?.(date.selectedDate, date.isUserChange);
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} dialogSize={{ width: 300 }}>
      <Dialog.Content className={calendarWrapperStyle}>
        <DatePicker
          className={calendarStyle}
          defaultValue={defaultValue}
          value={date.selectedDate}
          onChange={handleChange}
          minDate={moment().add(1, 'd').toDate()}
          maxDate={moment().add(1, 'y').toDate()}
          highlightCurrentDay={showToday}
        />
      </Dialog.Content>
      <Dialog.Actions className={calendarActionsStyle}>
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

export default Object.assign(Calendar, {
  show: (props: CalendarProps) => Dialog.create(Calendar, props),
});
