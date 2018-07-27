import http from 'src/utils/http';
// import { Alert } from 'src/components';

class FetchAjax {

  // 判断token 是否失效
  public async isToken(token: string): Promise<any> {
    return await http.post('/token', { token }
    );
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
        version: '1.0.1',
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

  // 绑定学校信息
  public async bindInfo(data: object): Promise<any> {
    const device_sn = localStorage.device_sn;
    const { token } = JSON.parse(localStorage.user);
    return await http.post('/bind',
      {
        token,
        device_sn,
        ...data
      }
    );
  }

  // 获取学校列表
  public async getSchoolList(token: string): Promise<any> {
    return await http.post('/school/get',
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

  // 更改绑定手机号时获取验证码
  public async edcode(mobile: string): Promise<any> {
    const { token } = localStorage.user && JSON.parse(localStorage.user);
    return await http.post('/edcode',
      {
        token,
        mobile
      }
    );
  }

  // 更改绑定手机号
  public async changeMobile(obj: { mobile: string, old_mobile: string, code: string }): Promise<any> {
    const { token } = localStorage.user && JSON.parse(localStorage.user);
    return await http.post('/mobile/change',
      {
        token,
        ...obj
      }
    );
  }

  // 修改密码
  public async changePassword(
    obj: {
      mobile: string,
      old_password: string,
      new_password: string
    }): Promise<any> {
    const { token } = localStorage.user && JSON.parse(localStorage.user);
    return await http.post('/password/change',
      {
        token,
        ...obj
      }
    );
  }

  // 获取课程评价的学期列表
  public async getSemesterList(): Promise<any> {
    return await http.post('/semester/list', {});
  }

  // 获取课程列表
  public async getCourseList(): Promise<any> {
    return await http.post('/course/list', {});
  }

  // 获取校园热线列表
  public async getCampusHotlineList(): Promise<any> {
    return await http.post('/campus/hotline', {});
  }

  // 获取校园热线搜索列表
  public async getCampusHotlineSearchList(): Promise<any> {
    return await http.post('/campus/hotline/search', {});
  }




  // 废弃的接口
  // 获取动态校园展示
  public async getDynamicCampus(accessToken?: string, schoolType?: string): Promise<any> {
    return await http.post('/dynamic/campus',
      {
        access_token: accessToken,
        school_type: schoolType,
      }
    );
  }

  // 获取动态校园展示
  public async getDynamicCampusInfo(id: string): Promise<any> {
    return await http.post('/dynamic/campus/info', { id });
  }

  // 获取校内论坛接口
  public async getSchoolForum(userId: string, page: number): Promise<any> {
    return await http.post('/school/forum', { user_id: userId, page }
    );
  }

  // 删除校内论坛的接口
  public async getSchoolForumDelete(currentId: string, scfId: number): Promise<any> {
    return await http.post('/school/forum/delete',
      {
        current_id: currentId,
        scf_id: scfId
      }
    );
  }

  // 校内论坛的点赞接口
  public async getSchoolForumSpot(userID: string, scfID: number): Promise<any> {
    return await http.post('/school/forum/spot',
      {
        user_id: userID,
        scf_id: scfID
      }
    );
  }

  // 校内论坛的取消点赞接口
  public async getSchoolForumUnspott(userID: string, scfID: number): Promise<any> {
    return await http.post('/school/forum/unspot',
      {
        user_id: userID,
        scf_id: scfID
      }
    );
  }

  // 发布/回复校内论坛评论接口
  public async getSchoolForumPublicComment(userID: string, scfID: number, content: string, parentID: number): Promise<any> {
    return await http.post('/school/forum/public/comment',
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
    return await http.post('/school/forum/comment/del',
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
