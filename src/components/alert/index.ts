import WpAlert from './alert';

interface IAlert { default: any; success: any; }

const alert = {} as IAlert;

alert.default = (props: any) => {
  return WpAlert(Object.assign({}, {
    type: 'default'
  }, props));
};

alert.success = (props: any) => {
  return WpAlert(Object.assign({}, {
    type: 'success'
  }, props));
};

export default alert;
