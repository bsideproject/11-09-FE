import classNames from 'classnames';
import moment from 'moment';

import { ReactComponent as OpenIcon } from '../assets/images/open.svg';
import { ReactComponent as SendIcon } from '../assets/images/send.svg';
import { ReactComponent as WriteIcon } from '../assets/images/write.svg';
import { layoutSprinkles } from '../styles/layout.css';
import Text from '../Text/Text';

import { letterDateStyle } from './LetterDate.css';
import { LetterDateProps } from './LetterDate.types';

const icon = {
  sent: <SendIcon />,
  receive: <OpenIcon />,
  write: <WriteIcon />,
};

const label = {
  sent: '편지 보낸 날',
  receive: '편지 열 수 있는 날',
  write: '마지막 작성일',
};

function LetterDate(props: LetterDateProps) {
  const { dateType, date } = props;

  return (
    <div
      className={classNames(layoutSprinkles({ display: 'flex', items: 'center' }), letterDateStyle)}
    >
      {icon[dateType]}
      <Text size={1}>
        {label[dateType]} : {moment(date).format('lll')}
      </Text>
    </div>
  );
}

export default LetterDate;
