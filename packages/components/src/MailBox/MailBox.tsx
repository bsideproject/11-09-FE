/* eslint-disable */
// 이미지 호출 부분 sort 에러나는 이유 찾아보기 
import sample from '../assets/icons/letter-sample.svg';
import send from '../assets/icons/letter_send.svg';
import letterOpen from '../assets/icons/letter_open.svg';
import {
  contentSpan,
  dateIcon,
  dateLine,
  dateSpan,
  mailBox,
  mailIcon,
  messageLine,
  titleSpan,
} from './MailBox.css';
import { MailBoxProps } from './MailBox.type';

function MailBox(props: MailBoxProps) {
  const { id, sendName, title, sendDate, wrtieDate, img } = props;
  return (
    <div className={mailBox} id={id}>
      <div className={messageLine}>
        <img className={mailIcon} src={img !== '' ? img : send} alt="icon" />
        <span className={contentSpan}>
          <span className={titleSpan}>
            TO.
            {sendName}
          </span>
          <br />
          {title}
        </span>
      </div>
      <div className={dateLine}>
        <img className={dateIcon} src={sample} alt="dateIcon" />
        <span className={dateSpan}>편지 보낸 날 :{sendDate}</span>
      </div>
      <div className={dateLine}>
        <img className={dateIcon} src={letterOpen} alt="dateIcon" />
        <span className={dateSpan}>편지 열 수 있는 날 :{wrtieDate}</span>
      </div>
    </div>
  );
}

export default MailBox;
