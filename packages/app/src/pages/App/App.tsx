import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from './Nav/Nav';

function App() {
  const location = useLocation();
  const showNav = useMemo(
    () => location.pathname !== '/login' && location.pathname !== '/intro',
    [location],
  );

  return (
    <>
      {showNav && <Nav />}
      <Outlet />
    </>
  );
}

export default App;
