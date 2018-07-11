import http from 'src/utils/http';
import { Alert } from 'src/components';

class FetchAjax {

  //  ajaxPost
  public async ajaxPost(url: string, dataObj: any): Promise<any> {
    const user = JSON.parse(localStorage.user);
    const data = {
      ...dataObj,
      access_token: user.access_token,
      school_type: user.school_type
    };
    const res = await http.post(url, data);

    if (res.errStatus === 101 || res.errStatus === 102) {
      return await this.getAccessToken(url, data);
    }

    return await res;

  }

  // token过期获取新的access_token
  public async getAccessToken(url: string, data: any): Promise<any> {
    const user = JSON.parse(localStorage.user);

    const res = await http.post('/gettoken', { token: user.token });

    if (!res.errcode) {
      localStorage.removeItem('hasSchool');
      Alert.default({
        content: '已过期，重新登录！',
        afterHide: () => {
          f7App.f7router.navigate('/login');
        }
      });
      return res;
    }

    user.access_token = res.resource.access_token;
    localStorage.user = JSON.stringify(user);
    // access_token change
    const dataObj = {
      ...data,
      access_token: res.resource.access_token
    };
    return await this.ajaxPost(url, dataObj);
  }

  // 发送设备信息
  public async getDevice(): Promise<any> {
    const device_sn = localStorage.device_sn;
    return await http.post('/device/get',
      {
        idfa: '',
        imei: '',
        os_type: 'Android',
        os_info: '8.2.0',
        version: '1.0.0',
        device_sn
      }
    );
  }

  // 登录接口
  public async signin(mobile: string, password: string): Promise<any> {
    const device_sn = localStorage.device_sn;
    return await http.post('/login',
      {
        device_sn,
        mobile,
        password
      }
    );
  }

  // 第二重登录接口
  public async doubleSignin(token: string, schoolType: string, userType: string, num: string, userPassword: string): Promise<any> {
    return await http.post('/select/login',
      {
        token,
        school_type: schoolType,
        user_type: userType,
        number: num,
        user_password: userPassword
      }
    );
  }

  // 第二重登录，第一次登录时绑定
  public async doubleSigninBind(token: string, schoolType: string, userType: string, num: string, userPassword: string): Promise<any> {
    return await http.post('/bind',
      {
        token,
        school_type: schoolType,
        user_type: userType,
        number: num,
        user_password: userPassword
      }
    );
  }

  // 获取学校列表
  public async getSchoolList(token: string): Promise<any> {
    return await http.post('/school/type',
      {
        token
      }
    );
  }

  // 获取注册验证码
  public async getSmscode(mobile: string): Promise<any> {
    return await http.post('/code',
      {
        mobile
      }
    );
  }

  // 获取找回密码验证码
  public async getSmsBackCode(mobile: string): Promise<any> {
    return await http.post('/recode',
      {
        mobile
      }
    );
  }

  // 注册
  public async register(mobile: string, password: string, code: string): Promise<any> {
    const device_sn = localStorage.device_sn;
    return await http.post('/register',
      {
        device_sn,
        mobile,
        code,
        password
      }
    );
  }

  // 找回密码
  public async pwdback(mobile: string, password: string, code: string): Promise<any> {
    const device_sn = localStorage.device_sn;
    return await http.post('/repass',
      {
        device_sn,
        mobile,
        password,
        code
      }
    );
  }

  // token过期获取新的access_token
  public async gettoken(token: string): Promise<any> {
    return await http.post('/gettoken',
      {
        token
      }
    );
  }

  // 获取动态校园展示
  public async getDynamicCampus(accessToken?: string, schoolType?: string): Promise<any> {
    return await this.ajaxPost('/dynamic/campus',
      {
        access_token: accessToken,
        school_type: schoolType,
      }
    );
  }

  // 获取动态校园展示
  public async getDynamicCampusInfo(id: string): Promise<any> {
    return await this.ajaxPost('/dynamic/campus/info', { id });
  }

  // 获取校内论坛接口
  public async getSchoolForum(userId: string, page: number): Promise<any> {
    return await this.ajaxPost('/school/forum', { user_id: userId, page }
    );
  }

  // 删除校内论坛的接口
  public async getSchoolForumDelete(currentId: string, scfId: number): Promise<any> {
    return await this.ajaxPost('/school/forum/delete',
      {
        current_id: currentId,
        scf_id: scfId
      }
    );
  }

  // 校内论坛的点赞接口
  public async getSchoolForumSpot(userID: string, scfID: number): Promise<any> {
    return await this.ajaxPost('/school/forum/spot',
      {
        user_id: userID,
        scf_id: scfID
      }
    );
  }

  // 校内论坛的取消点赞接口
  public async getSchoolForumUnspott(userID: string, scfID: number): Promise<any> {
    return await this.ajaxPost('/school/forum/unspot',
      {
        user_id: userID,
        scf_id: scfID
      }
    );
  }

  // 发布/回复校内论坛评论接口
  public async getSchoolForumPublicComment(userID: string, scfID: number, content: string, parentID: number): Promise<any> {
    return await this.ajaxPost('/school/forum/public/comment',
      {
        user_id: userID,
        scf_id: scfID,
        content,
        parent_id: parentID
      }
    );
  }

  // 发布/回复校内论坛评论接口
  public async getSchoolForumDelComment(userID: string, scfID: number, id: number): Promise<any> {
    return await this.ajaxPost('/school/forum/comment/del',
      {
        current_id: userID,
        scf_id: scfID,
        id,
      }
    );
  }


}

const fetchAjax = new FetchAjax();

export default fetchAjax;
