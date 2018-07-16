import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { selected } from 'src/images';

@observer
export default class Radio extends React.Component<IProps, {}> {

  public static defaultProps = {
    onChange: () => { }
  };

  public state = {};

  public $f7: any;

  public render() {
    return (
      <StyledLabel>
        <input type='radio'
          name={this.props.name}
          value={this.props.title}
          defaultChecked={this.props.checked}
          onChange={this.onChange} />
        <img src={selected} alt='' className='icon' />
        <div className='title'>{this.props.title}</div>
      </StyledLabel>
    );
  }

  public componentDidMount() {

  }

  public onChange = (e: any): void => {
    console.log(e.target.checked);
    if (this.props.onChange) {
      this.props.onChange(e.target.checked);
    }
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  name: string;
  value?: string;
  title?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

// interface IState {
//   user: any;
// }

const StyledLabel = Styled.label`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1.6rem 0 .32rem;
  transition-duration: .3s;

  &.active-state {
    transition-duration: 0s;
    background-color: #d8d8d8;
  }

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .icon {
    position: absolute;
    right: .32rem;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  & input[type="radio"]:checked ~ .icon {
    display: block;
  }

  .title {
    color: #333;
  }
`;
