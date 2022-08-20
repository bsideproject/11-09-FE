import mainSend from '~components/assets/images/main_mailbox.svg';
import mainWrite from '~components/assets/images/main_writeLetter.svg';

import Sidebar from '../Sidebar/Sidebar';

import MainBox from './Components/MainBox';

import { mainBody } from './Main.css';

function Main() {
  return (
    <div>
      <Sidebar titleName="타임레터" menu={1} />
      <div className={mainBody}>
        <MainBox value="편지쓰기" img={mainWrite} path="/" />
        <MainBox value="보낸편지함" img={mainSend} path="/letterBox" />
      </div>
    </div>
  );
}

export default Main;
