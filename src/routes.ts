// import * as React from 'react';

// import Loadable from 'react-loadable';

// 登录
// import Login from './pages/login';

// // 第二重登录
// import School from './pages/login/school';

// // 注册和找回密码
// import Register from './pages/register';

// 首页
import Home from './pages/home';

// 公告
// import Announcement from './pages/announcement';

// class Loading extends React.Component {
//   public render() {
//     return 'asdasd';
//   }
// }

// const Login = Loadable({
//   loader: () => import('./pages/login'),
//   loading: Loading,
// });


const routes: any[] = [
  {
    path: '/login',
    options: {
      animate: false
    },
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/login');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
  },
  {
    path: '/login/school/:state',
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/login/school');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
  },
  {
    path: '/registerlAndRegisterl/:type',
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/register');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
  },
  {
    path: '/home',
    options: {
      animate: false
    },
    component: Home
  },
  {
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
