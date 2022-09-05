import { Link, useNavigate } from 'react-router-dom';

import persistStore from '~/store/persistStore';
import { ReactComponent as CancelIcon } from '~components/assets/icons/cancel.svg';
import Dialog from '~components/Dialog/Dialog';
import { useDialog } from '~components/Dialog/Dialog.hooks';
import { Button, Text } from '~components/index';
import { removeCookie } from '~utils/cookies';

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
  const { isOpen, handleOpenDialog, handleCloseDialog } = useDialog();

  const navigate = useNavigate();

  const handleLogOut = () => {
    removeCookie('token');
    persistStore.dropInstance({ name: 'persistState' });
    navigate('/login', { replace: true });
  };

  const tabIndex = open ? 0 : -1;

  return (
    <div className={sideBarStyle}>
      <div className={backdropRecipe({ visible: open })} />
      <div className={sideBarRecipe({ visible: open })}>
        <Button
          label=""
          tabIndex={tabIndex}
          className={cancelIconStyle}
          onClick={onClose}
          variant="transparent"
        >
          <CancelIcon />
        </Button>
        <ul className={sideBarMenuListStyle}>
          {sideBarMenuList.main.map((item) => (
            <li key={item.title}>
              <Link tabIndex={tabIndex} to={item.path} style={{ fontWeight: 700 }}>
                <Text as="span" size={4} color="white">
                  {item.title}
                </Text>
              </Link>
            </li>
          ))}
          {sideBarMenuList.sub.map((item) => (
            <li key={item.title}>
              <Link tabIndex={tabIndex} to={item.path} style={{ fontWeight: 700 }}>
                <Text as="span" size={2} color="white">
                  {item.title}
                </Text>
              </Link>
            </li>
          ))}
          <li className={logoutStyle}>
            <Button tabIndex={tabIndex} variant="transparent" label="" onClick={handleOpenDialog}>
              <Text as="span" size={2} color="white">
                로그아웃
              </Text>
            </Button>
          </li>
        </ul>
        <Dialog isOpen={isOpen} style={{ width: 350 }}>
          <Dialog.Content>
            <Text as="p">로그아웃 하시겠습니까?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              label="취소"
              variant="outline"
              borderColor="gradient"
              onClick={handleCloseDialog}
            />
            <Button label="확인" background="gradient" onClick={handleLogOut} />
          </Dialog.Actions>
        </Dialog>
      </div>
    </div>
  );
}

export default SideBar;
