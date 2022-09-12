import moment from 'moment';

import { DatePicker } from '@blueprintjs/datetime';

import Dialog from '../Dialog/Dialog';
import { useDialog } from '../Dialog/Dialog.hooks';

import { calendarStyle, calendarWrapperStyle } from './Calendar.css';
import { CalendarProps } from './Calendar.types';

function Calendar(props: CalendarProps) {
  const { defaultValue, value, onChange, showToday = true } = props;
  const { isOpen, onClose } = useDialog();

  const handleChange = (selectedDate: Date, isUserChange: boolean) => {
    onClose();
    onChange?.(selectedDate, isUserChange);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} dialogSize={{ width: 260 }}>
      <Dialog.Content className={calendarWrapperStyle}>
        <DatePicker
          className={calendarStyle}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          minDate={moment().toDate()}
          maxDate={moment().add(1, 'y').toDate()}
          highlightCurrentDay={showToday}
        />
      </Dialog.Content>
    </Dialog>
  );
}

export default Object.assign(Calendar, {
  show: (props: CalendarProps) => Dialog.create(Calendar, props),
});
