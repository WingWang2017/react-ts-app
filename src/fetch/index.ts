import { http } from 'src/utils';

class FetchAjax {

  // 第一重登录接口
  public async signin(phone: string, password: string) {
    return await http.post('/login',
      {
        phone,
        password
      }
    );
  }

  // 第二重登录接口
  public async doubleSignin(token: string, schoolType: string, userType: string, num: string, userPassword: string) {
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
  public async doubleSigninBind(token: string, schoolType: string, userType: string, num: string, userPassword: string) {
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
  public async getSchoolList(token: string) {
    return await http.post('/school/type',
      {
        token
      }
    );
  }

  // 获取注册验证码
  public async getSmscode(phone: string) {
    return await http.get('/smscode',
      {
        phone
      }
    );
  }

  // 获取找回密码验证码
  public async getSmsBackCode(phone: string) {
    return await http.get('/smsbackcode',
      {
        phone
      }
    );
  }

  // 找回密码
  public async register(phone: string, password: string) {
    return await http.post('/register',
      {
        phone,
        password
      }
    );
  }

  // 找回密码
  public async pwdback(phone: string, password: string) {
    return await http.post('/pwdback',
      {
        phone,
        new_password: password
      }
    );
  }

  // token过期获取新的access_token
  public async gettoken(token: string) {
    return await http.post('/gettoken',
      {
        token
      }
    );
  }


}

const fetchAjax = new FetchAjax();

export default fetchAjax;
