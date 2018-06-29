// import * as React from 'react';

// import Loadable from 'react-loadable';

// 登录
import Login from './pages/login';

// 第二重登录
import School from './pages/login/school';

// 注册和找回密码
import Register from './pages/register';

// 首页
import Home from './pages/home';

// 公告
import Announcement from './pages/announcement';

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
  { path: '/login', component: Login },
  { path: '/login/school/:state', component: School },
  { path: '/registerlAndRegisterl/:type', component: Register },
  { path: '/home', component: Home },
  { path: '/announcement/:id', component: Announcement },
];

export default routes;
