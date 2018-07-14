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
        path: '/bindInfo',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/login/bindInfo');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
      },
    ]
  },
  {
    // 注册
    path: '/registerl',
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/login/register');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
  },
  {
    // 找回密码
    path: '/forgetPassword',
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/login/forget-password');
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
  {
    // 我的
    path: '/my',
    options: {
      animate: false,
      reloadAll: true
    },
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/my');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
    routes: [
      {
        // 设置
        path: '/setting',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/my/setting');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
        routes: [
          {
            // 绑定手机号
            path: '/bindMobile',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/setting/bind-mobile');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
          },
          {
            // 绑定手机号
            path: '/changeMobile',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/setting/change-mobile');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
          },
        ]
      },
    ]
  },
];

export default routes;
