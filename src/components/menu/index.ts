import WpMenu from './menu';

interface IActions {
  default(props: IDefaultProps): void;
}

interface IProps {
  data?: any[];
  onClick?(index: number): void;
}

interface IDefaultProps extends IProps {
  onConfirm?: () => void;
}

const Menu = {} as IActions;

Menu.default = (props) => {
  return WpMenu(Object.assign({}, {
    type: 'default'
  }, props));
};

export default Menu;
