import MainBox from './Components/MainBox';
import { mainBodyStyle } from './Main.css';

function Main() {
  return (
    <div className={mainBodyStyle}>
      <MainBox menuName="편지쓰기" path="/" />
      <MainBox menuName="보낸편지함" path="/letterBox" />
    </div>
  );
}

export default Main;
