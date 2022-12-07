import classNames from 'classnames';
import moment from 'moment';

import { ReactComponent as OpenIcon } from '../assets/images/open.svg';
import { ReactComponent as SendIcon } from '../assets/images/send.svg';
import { ReactComponent as WriteIcon } from '../assets/images/write.svg';
import { ReactComponent as LinkIcon } from '../assets/images/open_link.svg';
import { layoutSprinkles } from '../styles/layout.css';
import Text from '../Text/Text';

import { letterDateStyle } from './LetterDate.css';
import { LetterDateProps } from './LetterDate.types';

const icon = {
  sent: <SendIcon />,
  receive: <OpenIcon />,
  write: <WriteIcon />,
  link: <LinkIcon />,
};

const label = {
  sent: '편지 보낸 날',
  receive: '편지 열 수 있는 날',
  write: '마지막 작성일',
  link: '편지링크',
};

function LetterDate(props: LetterDateProps) {
  const { dateType, date } = props;
  const unsecuredCopyToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  };
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      unsecuredCopyToClipboard(text);
    }
  };
  return (
    <div
      className={classNames(layoutSprinkles({ display: 'flex', items: 'center' }), letterDateStyle)}
    >
      {icon[dateType]}
      <Text
        as="span"
        style={{
          fontSize: 'inherit',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {label[dateType]} :{' '}
        {dateType !== 'link' ? (
          moment(date).format('lll')
        ) : (
          <Text
            as="span"
            style={{
              fontSize: 'inherit',
              color: '#8055FA',
            }}
            onClick={() => handleCopyClipBoard(date)}
          >
            {date}
          </Text>
        )}
      </Text>
    </div>
  );
}

export default LetterDate;
