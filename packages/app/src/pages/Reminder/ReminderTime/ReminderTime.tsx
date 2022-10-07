import { useLayoutEffect, useState } from 'react';
import moment from 'moment';

import { Heading } from '@timeletter_fe/components/src';

import { bottomTagStyle, colonStyle, reminderTimer, timeBorderStyle } from './ReminderTime.css';
import { ReminderDayProps } from './ReminderTime.type';

function ReminderTime(props: ReminderDayProps) {
  const { endDay, openTime } = props;
  const end = moment(endDay);
  console.log('end >>> ', end);
  const [runningTime, setCounter] = useState(moment.duration);
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      const duration = moment.duration(end.diff(moment(new Date())));
      if (duration.milliseconds() < 0) {
        openTime(duration.milliseconds() < 0);
        clearInterval(timer);
      } else {
        setCounter(duration);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [runningTime]);

  return (
    <div className={reminderTimer}>
      <Heading
        className={timeBorderStyle}
        heading={ Math.floor(runningTime.asDays()) !== 0 ? Math.floor(runningTime.asDays()) : '0'}
        size={3}
        color="primary"
      />
      <p className={colonStyle}>:</p>
      <Heading
        className={timeBorderStyle}
        heading={runningTime.hours() !== 0 ? runningTime.hours() : '0'}
        size={3}
        color="primary"
      />
      <p className={colonStyle}>:</p>
      <Heading
        className={timeBorderStyle}
        heading={runningTime.minutes() !== 0 ? runningTime.minutes() : '0'}
        size={3}
        color="primary"
      />
      <p className={colonStyle}>:</p>
      <Heading
        className={timeBorderStyle}
        heading={runningTime.seconds() !== 0 ? runningTime.seconds() : '0'}
        size={3}
        color="primary"
      />
      <span className={bottomTagStyle}>일</span>
      <span className={bottomTagStyle}>시</span>
      <span className={bottomTagStyle}>분</span>
      <span className={bottomTagStyle}>초</span>
    </div>
  );
}

export default ReminderTime;
