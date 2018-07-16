
import WpConfirm from './confirm';

interface IConfirm {
	default: any;
	important: any;
	edit: any;
}

const Confirm = {} as IConfirm;

Confirm.default = (props: any) => {
	return WpConfirm(Object.assign({}, {
		type: 'default'
	}, props));
};

// 重要的
Confirm.important = (props: any) => {
	return WpConfirm(Object.assign({}, {
		type: 'important'
	}, props));
};

Confirm.edit = (props: any) => {
	return WpConfirm(Object.assign({}, {
		type: 'edit'
	}, props));
};

export default Confirm;
