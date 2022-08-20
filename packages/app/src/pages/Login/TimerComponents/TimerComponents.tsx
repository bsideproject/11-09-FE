/* eslint-disable */
import { useLayoutEffect, useState } from 'react';

import moment from 'moment';
import { time } from '../Login.css';

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

  return <p className={time}>{runningTime}</p>;
}

export default LoginTimer;
