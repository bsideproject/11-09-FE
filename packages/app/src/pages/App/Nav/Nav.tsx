import { useState } from 'react';

import { ReactComponent as Logo } from '~components/assets/icons/gnb_log.svg';
import { ReactComponent as MenuIcon } from '~components/assets/icons/sidebar_menu.svg';
import { Button } from '~components/index';

import SideBar from '../SideBar/SideBar';

import { navButtonStyle, navStyle, navWrapperStyle } from './Nav.css';

function Nav() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleMenuIconClick = () => setShowSideBar(!showSideBar);

  // TODO: Heading 부분 로고 이미지 교체 요청
  return (
    <header className={navWrapperStyle}>
      <nav className={navStyle}>
        <Logo />
        <Button
          className={navButtonStyle}
          variant="transparent"
          onClick={handleMenuIconClick}
          iconOnly
        >
          <MenuIcon />
        </Button>
      </nav>

      <SideBar open={showSideBar} onClose={handleMenuIconClick} />
    </header>
  );
}

export default Nav;
