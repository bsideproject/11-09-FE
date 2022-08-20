/* eslint-disable */
import Sample from '../assets/icons/letter-sample.svg';
import LetterOpen from '../assets/icons/letter_open.svg';
import Send from '../assets/icons/letter_send.svg';

import {
  contentSpan,
  dateIcon,
  dateLine,
  dateSpan,
  mailBox,
  mailIcon,
  messageLine,
  titleSpan
} from './MailBox.css';

import { MailBoxProps } from './MailBox.type';

function MailBox(props: MailBoxProps) {
  const { id, sendName, title, sendDate, wrtieDate, img } = props;
  return (
    <div className={mailBox}>
      <div className={messageLine}>
        <img className={mailIcon} src={img !== '' ? img : Sample} alt="icon" />
        <span className={contentSpan}>
          <span className={titleSpan}>TO. {sendName}</span>
          <br />
          {title}
        </span>
      </div>
      <div className={dateLine}>
        <img className={dateIcon} src={Send} alt="dateIcon" />
        <span className={dateSpan}>편지 보낸 날 : {sendDate}</span>
      </div>
      <div className={dateLine}>
        <img className={dateIcon} src={LetterOpen} alt="dateIcon" />
        <span className={dateSpan}> 편지 열 수 있는 날 : {wrtieDate}</span>
      </div>
    </div>
  );
}

export default MailBox;
