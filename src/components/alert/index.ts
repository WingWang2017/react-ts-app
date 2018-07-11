import WpAlert from './alert';
import { success } from 'src/images';

interface IAlert { default: any; success: any; }

const alert = {} as IAlert;

alert.default = (props: any) => {
  return WpAlert(Object.assign({}, {
    type: 'default'
  }, props));
};

alert.success = (props: any) => {
  return WpAlert(Object.assign({}, {
    type: 'success',
    icon: success
  }, props));
};

export default alert;
