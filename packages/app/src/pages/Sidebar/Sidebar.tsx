import { useState } from 'react';
import { Link } from 'react-router-dom';

import Back from '@/assets/icons/sidebar_back.svg';
import Cansel from '@/assets/icons/sidebar_cansel.svg';
import Open from '@/assets/icons/sidebar_menu.svg';

import {
  backIcon,
  barColor,
  cancelIcon,
  liStyle,
  Nav,
  openIcon,
  sideBar,
  titleText,
  ulstyle,
} from './Sidebar.css';
import { SidebarData, SidebarProps } from './Sidebar.type';

function Sidebar(props: SidebarProps) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { titleName, menu } = props;
  return (
    <div>
      <div className={Nav}>
        <span>
          <button className={backIcon({ display: menu })} onClick={showSidebar} type="submit">
            <img alt="back" src={Back} />
          </button>
          <h1 className={titleText({ font: menu })}>{titleName}</h1>
          <button className={openIcon({ display: menu })} onClick={showSidebar} type="submit">
            <img alt="open" src={Open} />
          </button>
        </span>
      </div>
      <div className={barColor({ open: sidebar })}>
        <div className={sideBar({ open: sidebar })}>
          <div>
            <button type="submit" className={cancelIcon} onClick={showSidebar}>
              <img alt="canSel" src={Cansel} />
            </button>
          </div>
          <ul className={ulstyle}>
            {SidebarData.map((item) => (
              <li className={liStyle({ divId: item.divNum })} key={item.title}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
