import axios from 'axios';
import * as qs from 'qs';
import { Alert } from 'src/components';
// import fetchAjax from 'src/fetch';
// import base from './base'

axios.interceptors.request.use(config => {
  // loading
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(async (response) => {

  // if (response.data.errStatus === 102) {
  //   localStorage.removeItem('hasSchool');
  //   Alert.default({
  //     content: '已过期，重新登录！',
  //     afterHide: () => {
  //       f7App.mainView.router.loadPage(`/login`);
  //     }
  //   });
  // }

  return await response;
}, error => {
  return Promise.resolve(error.response);
});

function checkStatus(response: any) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.data.data) {
      response.data.resource = response.data.data;
    }
    return response.data;
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }

  // 异常状态下，把错误信息返回去
  return {
    msg: response && response.statusText,
    status: response && response.status
  };
}

function checkCode(res: any) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status >= 400 || res.status <= 505) {
    Alert.default({
      content: res.msg
    });
  }

  // 正确请求有数据
  // if (res.data && (!res.data.errcode)) {
  //     alert(res.data.errmsg)
  // }
  return res;
}

export default {
  post(url: string, data: any) {
    return axios({
      baseURL: 'http://phone.mostyouth.cn/api',
      data: qs.stringify(data),
      timeout: 10000,
      method: 'post',
      url,
      headers: {
        // 'X-CSRF-Token': base.csrf_token,
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((response) => {
      return checkStatus(response);
    }).then((res) => {
      return checkCode(res);
    });
  },
  get(url: string, params: any) {
    return axios({
      baseURL: 'http://phone.mostyouth.cn/api',
      method: 'get',
      timeout: 10000,
      url,
      params, // get 请求时带的参数
      headers: {
        // 'X-CSRF-Token': base.csrf_token,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((response) => {
      return checkStatus(response);
    }).then((res) => {
      return checkCode(res);
    });
  }

};
