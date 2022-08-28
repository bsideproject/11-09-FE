import { useEffect } from 'react';
import { Route, Routes as Switch, useLocation, useNavigate } from 'react-router-dom';

import App from '@/pages/App/App';

import { getCookie } from '~utils/cookies';

import LetterBox from './LetterBox/LetterBox';
import Login from './Login/Login';
import LoginIntro from './Login/LoginIntro/LoginIntro';
import Main from './Main/Main';
import MyPage from './MyPage/MyPage';
import Reminder from './Reminder/Reminder';

function Routes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie('token') && location.pathname !== '/login') {
      navigate('/login', { replace: true });
    }
  }, [location]);

  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/intro" element={<LoginIntro />} />

      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/letterBox" element={<LetterBox />} />
      </Route>
    </Switch>
  );
}

export default Routes;
