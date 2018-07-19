import InitialPage from './pages/initialPage';

// import Notice from './pages/message-center/notice';


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
            routes: [
              {
                // 更改手机号
                path: '/changeMobile',
                async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
                  const reactComponent = () => import('./pages/my/setting/change-mobile');
                  reactComponent().then((rc) => {
                    resolve({ component: rc.default });
                  });
                }
              },
            ]
          },
          {
            // 修改密码
            path: '/changePassword',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/setting/change-password');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            }
          },
          {
            // 隐私设置
            path: '/privacy',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/setting/privacy');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
            routes: [
              {
                // 黑名单
                path: '/blacklist',
                async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
                  const reactComponent = () => import('./pages/my/setting/blacklist');
                  reactComponent().then((rc) => {
                    resolve({ component: rc.default });
                  });
                }
              }
            ]
          },
          {
            // 消息通知
            path: '/notification',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/setting/notification');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            }
          }
          ,
          {
            // 关于最青春
            path: '/about',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/setting/about');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            }
          }
        ]
      },
    ]
  },
  {
    // 消息中心
    path: '/message',
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/message-center');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
  },
];

export default routes;
