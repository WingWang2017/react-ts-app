import WpActions from './actions';

interface IActions { default: any; success: any; }

const Actions = {} as IActions;

Actions.default = (props: any) => {
    return WpActions(Object.assign({}, {
        type: 'default'
    }, props));
};

export default Actions;
