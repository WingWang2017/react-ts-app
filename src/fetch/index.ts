import { http } from '../utils';

class FetchAjax {

  public async signin(phone: string, password: string) {
    return await http.post('http://phone.mostyouth.cn/api/login',
      {
        phone,
        password
      }
    );
  }

  public async doubleSignin(token: string, schoolType: string, userType: string, num: string, userPassword: string) {
    return await http.post('http://phone.mostyouth.cn/api/select/login',
      {
        token,
        'school-type': schoolType,
        'user-type': userType,
        number: num,
        'user-password': userPassword
      }
    );
  }

}

const fetchAjax = new FetchAjax();

export default fetchAjax;
