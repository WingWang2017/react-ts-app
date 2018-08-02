import WpActions from './actions';

interface IActions {
	default: any;
	customize: any;
}

const Actions = {} as IActions;

Actions.default = (props: any) => {
	return WpActions(Object.assign({}, {
		type: 'default'
	}, props));
};

Actions.customize = (props: any) => {
	return WpActions(Object.assign({}, {
		type: 'customize'
	}, props));
};

export default Actions;
