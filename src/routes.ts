
// 登录
import Login from './pages/login';

// 第二重登录
import School from './pages/login/school';

// 注册和找回密码
import Register from './pages/register';

// 首页
import Home from './pages/home';

const routes: any[] = [
  { path: '/login', component: Login },
  { path: '/login/school/:state', component: School },
  { path: '/registerlAndRegisterl/:type', component: Register },
  { path: '/home', component: Home },
];

export default routes;
