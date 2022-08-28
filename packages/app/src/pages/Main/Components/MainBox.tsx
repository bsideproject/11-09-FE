import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowLargImg } from '~components/assets/icons/main_arrowLarge.svg';
import { ReactComponent as MainSend } from '~components/assets/images/main_mailbox.svg';
import { ReactComponent as SendBox } from '~components/assets/images/main_sendBox.svg';
import { ReactComponent as WriteBox } from '~components/assets/images/main_writeBox.svg';
import { ReactComponent as MainWrite } from '~components/assets/images/main_writeLetter.svg';
import { Heading } from '~components/index';

import { arrowLargeStyle, mainBoxRecipe, menuTextStyle } from './MainBox.css';
import { mainBoxProps } from './MainBox.type';

function MainBox(props: mainBoxProps) {
  const [viewHober, hover] = useState(true);
  const { path, value } = props;

  return (
    <Link to={path}>
      <div
        className={mainBoxRecipe({ value: viewHober })}
        onMouseEnter={() => hover(false)}
        onMouseLeave={() => hover(true)}
      >
        {value === '편지쓰기' && (
          <>
            <SendBox style={{ borderRadius: '16px', position: 'absolute', zIndex: -1 }} />
            <MainSend style={{ flexBasis: '65%', paddingLeft: '8%', marginTop: '3%' }} />
          </>
        )}
        {value === '보낸편지함' && (
          <>
            <WriteBox style={{ borderRadius: '16px', position: 'absolute', zIndex: -1 }} />
            <MainWrite style={{ flexBasis: '65%', paddingLeft: '8%', marginTop: '3%' }} />
          </>
        )}
        {/* <div style={{ flexBasis: '65%', paddingLeft: '8%', marginTop: '3%' }}>
          <img alt={value} src={img} />
        </div> */}
        <ArrowLargImg className={arrowLargeStyle} />
        <Heading className={menuTextStyle} as="h1" heading={value} size={3} color="white" />
      </div>
    </Link>
  );
}

export default MainBox;
