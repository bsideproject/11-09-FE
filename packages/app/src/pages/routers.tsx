import { Route, Routes as Switch } from 'react-router-dom';

import LetterBox from './LetterBox/LetterBox';
import Login from './Login/Login';
import LoginIntro from './Login/LoginIntro/LoginIntro';
import Main from './Main/Main';
import MyPage from './MyPage/MyPage';
import Reminder from './Reminder/Reminder';

function Routers() {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
      <Route path="/reminder" element={<Reminder />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/intro" element={<LoginIntro />} />
      <Route path="/letterBox" element={<LetterBox />} />
    </Switch>
  );
}

export default Routers;
