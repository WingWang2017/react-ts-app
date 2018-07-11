import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';


@observer
class Select extends React.Component<IProps, IState> {

  public static defaultProps = {
    value: '',
    onChange: () => { }
  };

  public state = {
    value: '',
    type: true,
    theme: '#d8d8d8'
  };

  public render() {
    return (
      <StyledSelect defaultValue={this.props.value} onChange={this.onChange} theme={this.state.theme}>
        <option value={this.props.value} hidden={true} >{this.props.value}</option>
        <Option data={this.props.data} />
      </StyledSelect>
    );
  }

  public onChange = (e: any): void => {
    const value: string = e.target.value;
    this.setState({
      theme: '#fff'
    });
    this.props.onChange(value);
  }

}

const Option: React.SFC<IPropsFn> = observer((props): any => {
  if (props.data) {
    return (
      props.data.map((item: any) =>
        <option key={item.id} value={item.id}>{item.name}</option>
      )
    );
  } else {
    return null;
  }
});

interface IPropsFn {
  children?: string;
  data: any[];
}

interface IProps {
  data: any[];
  value?: string;
  onChange: any;
}

interface IState {
  value: string;
  type: boolean;
  theme: string;
}

const StyledSelect = Styled.select`
  width: 100%;
  height: .8rem;
  margin-bottom: .3rem;
  padding: 0 .3rem 0 .2rem;
  border: 1px solid #fff;
  border-radius: 6px;
  background-color: transparent;
  font-size: .28rem;
  color: ${props => props.theme || '#fff'};
`;

export default Select;
