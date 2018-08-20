// import InitialPage from './pages/initialPage';

// import Notice from './pages/message-center/notice';


const routes: any[] = [
  {
    // 初始页
    path: '/',
    options: {
      animate: false,
      reloadAll: true
    },
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/initialPage');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
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
    routes: [
      {
        // 校园论坛详情
        path: '/campusForumDetails/:id',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/home/campus-forum-details');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
      }
    ]
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
      {
        // 课表
        path: '/timetable',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/my/timetable');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
        routes: [
          {
            // 课程详情
            path: '/courseDetails',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/timetable/course-details');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
          }
        ]
      },
      {
        // 成绩
        path: '/result',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/my/result');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
        routes: [
          {
            // 成绩详情
            path: '/details',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/result/details');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
          },
          {
            // 等级考试
            path: '/gradeTest',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/result/grade-test');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
            routes: [
              {
                // 等级考试详情
                path: '/details',
                async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
                  const reactComponent = () => import('./pages/my/result/grade-test-details');
                  reactComponent().then((rc) => {
                    resolve({ component: rc.default });
                  });
                },
              }
            ]
          }
        ]
      },
      {
        // 校园热线
        path: '/campusHotline',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/my/campus-hotline');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
      },
      {
        // 课程评价
        path: '/courseEvaluation',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/my/course-evaluation');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
        routes: [
          {
            // 课程评价详情页
            path: '/evaluationDetails',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/my/course-evaluation/evaluation-details');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
            routes: [
              {
                // 课程评价页
                path: '/evaluate',
                async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
                  const reactComponent = () => import('./pages/my/course-evaluation/evaluate');
                  reactComponent().then((rc) => {
                    resolve({ component: rc.default });
                  });
                },
              }
            ]
          }
        ]
      },
      {
        // 校园论坛
        path: '/campusForum',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/my/campus-forum');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
      },
      {
        // 我的 => 我的校友圈
        path: '/alumni-circle',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          import('./pages/my/alumni-circle').then((rc) => {
            resolve({ component: rc.default });
          });
        },
      },
      {
        // 我的 => 我的关注
        path: '/follow',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          import('./pages/my/follow').then((rc) => {
            resolve({ component: rc.default });
          });
        },
      },
      {
        // 我的 => 我的粉丝
        path: '/fans',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          import('./pages/my/fans').then((rc) => {
            resolve({ component: rc.default });
          });
        },
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
    routes: [
      {
        // 消息中心 => 聊天界面
        path: '/chat',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/message-center/chat');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
      },
      {
        // 消息中心 => 群聊界面
        path: '/group-chat',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/message-center/group-chat');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
        routes: [
          {
            // 消息中心 => 群聊界面 => 群信息
            path: '/information',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/message-center/group-chat/information');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
            routes: [
              {
                // 消息中心 => 群聊界面 => 群信息 => 新增成员
                path: '/new-members',
                async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
                  const reactComponent = () => import('./pages/message-center/group-chat/new-members');
                  reactComponent().then((rc) => {
                    resolve({ component: rc.default });
                  });
                },
              },
              {
                // 消息中心 => 群聊界面 => 群信息 => 删除成员
                path: '/delete-members',
                async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
                  const reactComponent = () => import('./pages/message-center/group-chat/delete-members');
                  reactComponent().then((rc) => {
                    resolve({ component: rc.default });
                  });
                },
              }
            ]
          }
        ]
      },
      {
        // 消息中心 => 聊天界面
        path: '/select-contacts',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/message-center/select-contacts');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
      },
      {
        // 消息中心 => 同校搜索
        path: '/school-search',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/message-center/school-search');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
      }
    ]
  },
  {
    // 发现
    path: '/discover',
    options: {
      animate: false,
      reloadAll: true
    },
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      const reactComponent = () => import('./pages/discover');
      reactComponent().then((rc) => {
        resolve({ component: rc.default });
      });
    },
    routes: [
      {
        // 活动报名
        path: '/activity',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          const reactComponent = () => import('./pages/discover/activity');
          reactComponent().then((rc) => {
            resolve({ component: rc.default });
          });
        },
        routes: [
          {
            // 活动详情
            path: '/details',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              const reactComponent = () => import('./pages/discover/activity/details');
              reactComponent().then((rc) => {
                resolve({ component: rc.default });
              });
            },
          }
        ]
      },
      {
        // 二手闲置
        path: '/used-idle',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          import('./pages/discover/used-idle').then((rc) => {
            resolve({ component: rc.default });
          });
        },
      }
    ]
  },
  {
    // 云课堂
    path: '/classroom',
    options: {
      animate: false,
      reloadAll: true
    },
    async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
      import('./pages/cloud-classroom').then((rc) => {
        resolve({ component: rc.default });
      });
    },
    routes: [
      {
        // 云课堂 学生页
        path: '/student',
        async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
          import('./pages/cloud-classroom/student').then((rc) => {
            resolve({ component: rc.default });
          });
        },
        routes: [
          {
            // 云课堂 学生页 历史考勤
            path: '/history-attendance',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              import('./pages/cloud-classroom/student/history-attendance').then((rc) => {
                resolve({ component: rc.default });
              });
            },
          },
          {
            // 云课堂 学生页 课程公告
            path: '/course-announcement',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              import('./pages/cloud-classroom/student/course-announcement').then((rc) => {
                resolve({ component: rc.default });
              });
            },
            routes: [
              {
                // 云课堂 学生页 课程公告 详情
                path: '/details',
                async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
                  import('./pages/cloud-classroom/student/course-announcement/details').then((rc) => {
                    resolve({ component: rc.default });
                  });
                },
              }
            ]
          },
          {
            // 云课堂 学生页 课程资源
            path: '/course-resources',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              import('./pages/cloud-classroom/student/course-resources').then((rc) => {
                resolve({ component: rc.default });
              });
            },
          },
          {
            // 云课堂 学生页 同步放映
            path: '/sync-show',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              import('./pages/cloud-classroom/student/sync-show').then((rc) => {
                resolve({ component: rc.default });
              });
            },
          },
          {
            // 云课堂 学生页 问卷测验
            path: '/questionnaire-test',
            async(routeTo: any, routeFrom: any, resolve: any, reject: any) {
              import('./pages/cloud-classroom/student/questionnaire-test').then((rc) => {
                resolve({ component: rc.default });
              });
            },
          }
        ]
      }
    ]
  }
];

export default routes;
