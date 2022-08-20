import { Link } from 'react-router-dom';

import Sample from '@/assets/icons/letter-sample.svg';
import Sidebar from '@/pages/Sidebar/Sidebar';

import { MailBox, ProgressBar } from '~components/index';

import { letterBody, Nav } from './LetterBox.css';

function LetterBox() {
  return (
    <div>
      <Sidebar titleName="타임레터" menu={1} />
      {/* Nav를 컴포넌트로 빼는게 맞는건지.. */}
      <div className={Nav}>
        <ul>
          <Link to="/letterBox">
            <li> 보낸편지함</li>
          </Link>
          <Link to="/main">
            <li style={{ fontWeight: '300' }}> 임시보관함 </li>
          </Link>
        </ul>
        <div style={{ width: '100%', backgroundColor: 'var(--colors-black__15swe8nd)' }}>
          <ProgressBar activeStep={3} steps={5} />
        </div>
      </div>
      {/* Nav를 컴포넌트로 빼는게 맞는건지.. */}
      <div className={letterBody}>
        <MailBox
          id=""
          img={Sample}
          sendDate="2022년 10월 16일 오후 11:25"
          sendName="우영우님"
          title="영우야 안녕 너는 봄날의 햇살이야"
          wrtieDate="2022년 10월 29일 오후 11:25"
        />
      </div>
    </div>
  );
}

export default LetterBox;
