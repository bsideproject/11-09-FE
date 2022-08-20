type SidebarItem = {
  title: string;
  path: string;
  divNum: 1 | 2 | 3;
};

export type SidebarProps = {
  titleName: string;
  menu: 1 | 2 | 3;
};

export const SidebarData: SidebarItem[] = [
  {
    title: '홈',
    path: '/main',
    divNum: 1,
  },
  {
    title: '마이페이지',
    path: '/myPage',
    divNum: 1,
  },
  {
    title: '타임레터 소개',
    path: '/letterAbout',
    divNum: 1,
  },
  {
    title: '이용갹관',
    path: '/letterAbout',
    divNum: 2,
  },
  {
    title: '개인정보 처리 방침',
    path: '/letterAbout',
    divNum: 2,
  },

  {
    title: '로그아웃',
    path: '/letterAbout',
    divNum: 3,
  },
];
