// /* eslint-disable */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import arrowLargImg from '@/assets/icons/main_arrowLarge.svg';
import box from '@/assets/icons/main_box.svg';

import { Heading } from '~components/index';

import { mainBoxProps } from './MainBox.type';

import { arrowLarge, mainBox, oneTag, spanTag } from './MainBox.css';

function MainBox(props: mainBoxProps) {
  const [viewHober, hover] = useState(true);
  const pro:mainBoxProps = props;

  return (
    <div
      style={{
        background: `url(${box})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
      className={mainBox({ value: viewHober })}
      onMouseEnter={() => hover(false)}
      onMouseLeave={() => hover(true)}
    >
      <Link to={pro.path}>
        <button type="button" style={{ width: '100%', height: '100%' }}>
          <div className={oneTag}>
            <img alt="편지쓰기" src={pro.img} />
          </div>
          <div className={arrowLarge}>
            <img alt="arrow" src={arrowLargImg} />
          </div>
          <span className={spanTag}>
            <Heading as="h1" heading={pro.value} size={3} />
          </span>
        </button>
      </Link>
    </div>
  );
}

export default MainBox;
