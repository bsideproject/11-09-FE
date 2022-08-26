import { useState } from 'react';

import { ReactComponent as MenuIcon } from '@/assets/icons/sidebar_menu.svg';

import { Button, Heading } from '~components/index';

import SideBar from '../SideBar/SideBar';

import { navMenuStyle, navStyle } from './Nav.css';

function Nav() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleMenuIconClick = () => setShowSideBar(!showSideBar);

  return (
    <header>
      <nav className={navStyle}>
        <Heading size={3} color="white">
          타임레터
        </Heading>
        <Button className={navMenuStyle} onClick={handleMenuIconClick} iconOnly>
          <MenuIcon />
        </Button>
      </nav>
      <SideBar open={showSideBar} onClose={handleMenuIconClick} />
    </header>
  );
}

export default Nav;
