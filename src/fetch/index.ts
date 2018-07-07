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
          // f7App.mainView.router.loadPage(`/login`);
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

  // 第一重登录接口
  public async signin(phone: string, password: string): Promise<any> {
    return await http.post('/login',
      {
        phone,
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
  public async getSmscode(phone: string): Promise<any> {
    return await http.get('/smscode',
      {
        phone
      }
    );
  }

  // 获取找回密码验证码
  public async getSmsBackCode(phone: string): Promise<any> {
    return await http.get('/smsbackcode',
      {
        phone
      }
    );
  }

  // 找回密码
  public async register(phone: string, password: string): Promise<any> {
    return await http.post('/register',
      {
        phone,
        password
      }
    );
  }

  // 找回密码
  public async pwdback(phone: string, password: string): Promise<any> {
    return await http.post('/pwdback',
      {
        phone,
        new_password: password
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
