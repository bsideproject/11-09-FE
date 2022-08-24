import { useLayoutEffect, useState } from 'react';
import moment from 'moment';

import { timeStyle } from './TimeComponent.css';

function LoginTimer() {
  let timeState = '';
  const [runningTime, setCounter] = useState(timeState);
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      timeState = `${moment().format('DDD')} : ${moment().format('hh')} : ${moment().format(
        'mm',
      )} : ${moment().format('ss')}`;
      setCounter(timeState);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <p className={timeStyle}>{runningTime}</p>;
}

export default LoginTimer;
