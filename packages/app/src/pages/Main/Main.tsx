import mainSend from '~components/assets/images/main_mailbox.svg';
import mainWrite from '~components/assets/images/main_writeLetter.svg';

import MainBox from './Components/MainBox';
import { mainBodyStyle } from './Main.css';

function Main() {
  return (
    <div className={mainBodyStyle}>
      <MainBox value="편지쓰기" img={mainWrite} path="/" />
      <MainBox value="보낸편지함" img={mainSend} path="/letterBox" />
    </div>
  );
}

export default Main;
