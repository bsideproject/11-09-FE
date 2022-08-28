import { Link } from 'react-router-dom';

import { ReactComponent as CancelIcon } from '~components/assets/icons/cancel.svg';
import { Button, Text } from '~components/index';

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
            <Button tabIndex={tabIndex} variant="transparent" label="">
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
