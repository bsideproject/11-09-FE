import { Link, useNavigate } from 'react-router-dom';

import persistStore from '~/store/persistStore';
import { ReactComponent as CancelIcon } from '~components/assets/icons/cancel.svg';
import { Button, Text } from '~components/index';
import { removeCookie } from '~utils/cookies';

import LogoutConfirm from '../LogoutConfirm/LogoutConfirm';

import { sideBarMenuList } from './SideBar.const';
import {
  backdropRecipe,
  cancelIconStyle,
  logoutStyle,
  sideBarMenuListStyle,
  sideBarRecipe,
  sideBarStyle,
} from './Sidebar.css';
import { SideBarProps } from './Sidebar.type';

function SideBar(props: SideBarProps) {
  const { open, onClose } = props;

  const navigate = useNavigate();

  const handleLogOut = () => {
    removeCookie('token');
    persistStore.dropInstance({ name: 'persistState' });
    navigate('/login', { replace: true });
  };

  const handleOpenDialog = () => LogoutConfirm.show({ onConfirm: handleLogOut });

  const tabIndex = open ? 0 : -1;

  return (
    <div className={sideBarStyle}>
      <div className={backdropRecipe({ visible: open })} />
      <div className={sideBarRecipe({ visible: open })}>
        <Button
          tabIndex={tabIndex}
          className={cancelIconStyle}
          onClick={onClose}
          variant="transparent"
          iconOnly
        >
          <CancelIcon />
        </Button>
        <ul className={sideBarMenuListStyle}>
          {sideBarMenuList.main.map((item) => (
            <li key={item.title}>
              {item.path.indexOf('https') ? (
                <Link
                  tabIndex={tabIndex}
                  to={item.path}
                  style={{ fontWeight: 700 }}
                  onClick={onClose}
                >
                  <Text as="span" size={4} color="white">
                    {item.title}
                  </Text>
                </Link>
              ) : (
                <a href={item.path} style={{ fontWeight: 700 }}>
                  <Text as="span" size={4} color="white">
                    {item.title}
                  </Text>
                </a>
              )}
            </li>
          ))}
          {sideBarMenuList.sub.map((item) => (
            <li key={item.title}>
              <a href={item.path} style={{ fontWeight: 700 }}>
                <Text as="span" size={2} color="white">
                  {item.title}
                </Text>
              </a>
            </li>
          ))}
          <li className={logoutStyle}>
            <Button tabIndex={tabIndex} variant="transparent" onClick={handleOpenDialog}>
              <Text as="span" size={2} color="white">
                로그아웃
              </Text>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
