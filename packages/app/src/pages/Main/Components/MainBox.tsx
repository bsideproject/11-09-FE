import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowLargImg } from '~components/assets/icons/main_arrowLarge.svg';
import { ReactComponent as SendBox } from '~components/assets/images/main_sendBox.svg';
import { ReactComponent as WriteBox } from '~components/assets/images/main_writeBox.svg';
import mainSend from '~components/assets/misc/main_mailbox.svg';
import mainWrite from '~components/assets/misc/main_writeLetter.svg';
import { Heading } from '~components/index';

import {
  arrowLargeStyle,
  boxImgStyle,
  imageBoxStyle,
  mainBoxRecipe,
  menuTextStyle,
  oneTagStyle,
} from './MainBox.css';
import { mainBoxProps } from './MainBox.type';

function MainBox(props: mainBoxProps) {
  const [viewHober, hover] = useState(true);
  const { path, menuName } = props;

  return (
    <Link to={path}>
      <div
        className={mainBoxRecipe({ value: viewHober })}
        onMouseEnter={() => hover(false)}
        onMouseLeave={() => hover(true)}
      >
        {menuName === '편지쓰기' && (
          <>
            <SendBox className={boxImgStyle} />
            <div className={imageBoxStyle}>
              <img className={oneTagStyle} alt="zz" src={mainSend} />
            </div>
          </>
        )}
        {menuName === '보낸편지함' && (
          <>
            <WriteBox className={boxImgStyle} />
            <div className={imageBoxStyle}>
              <img className={oneTagStyle} alt="zz" src={mainWrite} />
            </div>
          </>
        )}
        <ArrowLargImg className={arrowLargeStyle} />
        <Heading className={menuTextStyle} as="h1" heading={menuName} size={3} color="white" />
      </div>
    </Link>
  );
}

export default MainBox;
