import WpActions from './actions';

interface IActions {
	default(props: IDefaultProps): void;
	customize(props: ICustomizeProps): void;
}

interface IProps {
	cancelText?: string;
}

interface IDefaultProps extends IProps {
	title?: string;
	confirmText?: string;
	cancelText?: string;
	color?: string;
	onConfirm?: () => void;
}

interface ICustomizeProps extends IProps {
	textList: string[];
	onListClick: (index: number) => void;
}

const Actions = {} as IActions;

Actions.default = (props) => {
	return WpActions(Object.assign({}, {
		type: 'default'
	}, props));
};


Actions.customize = (props) => {
	return WpActions(Object.assign({}, {
		type: 'customize'
	}, props));
};

export default Actions;
