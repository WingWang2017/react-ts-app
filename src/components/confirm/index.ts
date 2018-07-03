
import WpConfirm from './confirm';

interface IConfirm { default: any; edit: any; }

const Confirm = {} as IConfirm;

Confirm.default = (props: any) => {
	return WpConfirm(Object.assign({}, {
		type: 'default'
	}, props));
};

Confirm.edit = (props: any) => {
	return WpConfirm(Object.assign({}, {
		type: 'edit'
	}, props));
};

export default Confirm;
