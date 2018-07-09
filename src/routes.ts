import InitialPage from './pages/initialPage';


const routes: any[] = [
  {
    // 初始页
    path: '/',
    options: {
      animate: false,
      reloadAll: true
    },
    component: InitialPage
  },
  {
    // 登录
    path: '/login',
    options: {
      animate: false,
      reloadAll: true
    },
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/login');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
    routes: [
      {
        // 第二重登录
        path: '/school/:state',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/login/school');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
      },
    ]
  },
  {
    // 注册和找回密码
    path: '/registerlAndRegisterl/:type',
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/register');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
  },
  {
    // 首页
    path: '/home',
    options: {
      animate: false,
      reloadAll: true
    },
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/home');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
  },
  {
    // 公告
    path: '/announcement/:id',
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/announcement');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
  },
];

export default routes;
