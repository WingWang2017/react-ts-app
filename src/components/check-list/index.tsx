import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { PageList, Avatar } from 'src/components';

import {
  pick_normal,
  pick_selected
} from 'src/images';

@observer
export default class CheckList extends React.Component<IProps, {}> {

  public static defaultProps = {
    onClick: () => { }
  };

  public state = { check: false };

  public $f7: F7.Dom;

  public render() {
    return (
      <PageList display='flex' padding='.24rem 0' link='#' onClick={this.onClick}>
        <SyledCheckbox className={this.state.check ? 'check' : ''} />
        <Avatar size='large' />
        <div>
          <p className='name boy'>王琦</p>
          <p className='class-name'>数字媒体1402</p>
        </div>
      </PageList>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onClick = () => {
    this.setState({
      check: !this.state.check
    });
    this.props.onClick();
  }

}

interface IProps {
  onClick(): void;
}

// interface IState {
//   user: any;
// }


const SyledCheckbox = Styled.i`
  display: block;
  width: 1.12rem;
  height: .96rem;
  background: url("${pick_normal}") no-repeat center center / .48rem .48rem;

  &.check {
    background-image: url("${pick_selected}");
  }
`;
