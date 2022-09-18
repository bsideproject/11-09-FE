import env from '~/config';

import { SidebarMenuItem } from './Sidebar.type';

export const sideBarMenuList: Record<string, SidebarMenuItem[]> = {
  main: [
    {
      title: '홈',
      path: '/',
    },
    {
      title: '마이페이지',
      path: '/myPage',
    },
    {
      title: '타임레터 소개',
      path: `${env.noctionURL}98b4fa790e0f4563a08189679fc91d5e`,
    },
  ],
  sub: [
    {
      title: '이용약관',
      path: `${env.noctionURL}91772865c97d43e68101a5486e229e4d`,
    },
    {
      title: '개인정보 처리 방침',
      path: `${env.noctionURL}f964912552da433c8ac2e7611549ecdf`,
    },
  ],
};
