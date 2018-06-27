import * as React from 'react';

// import { Dom7 } from 'framework7-react/dist/commonjs/framework7/Framework7';
// import { Framework7 } from 'framework7-react';

import { observer, inject } from 'mobx-react';

import Styled from 'styled-components';

import { student, teacher, login_selected } from '../../images';


@inject('f7')
@observer
class School extends React.Component<IProps, IState> {

  public static defaultProps = {
    value: 'student',
    onChange: () => { }
  };

  public state = {
    num: this.props.value
  };

  public render() {
    return (
      <StyledDiv>
        <div className='head' onClick={this.onClick('student')}>
          <img src={student} alt='我是学生' />
          我是学生
        </div>
        <div className='head' onClick={this.onClick('teacher')}>
          <img src={teacher} alt='我是教师' />
          我是教师
        </div>
        <img
          src={login_selected}
          alt=''
          className={`img ${this.state.num === 'student' ? 'student' : 'teacher'}`} />
      </StyledDiv>
    );
  }

  public componentDidMount(): void {
    // ss

  }

  public onClick = (num: string) => (): void => {
    this.setState({
      num
    });
    this.props.onChange(num);
  }

}

interface IProps {
  f7?: any;
  value: string;
  onChange?: any;
}

interface IState {
  num: string;
}

const StyledDiv = Styled.div`
  display: flex;
  width: 4.24rem;
  height: 5.2rem;
  padding-top: 2rem;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  > .head {
    flex: 1 0 1.12rem;
    height: auto;
    margin: 0 .5rem;
    color: #fff;
    font-size: .28rem;
    > img {
      width: 100%;
      height: 1.58rem;
      margin-bottom: .1rem;
    }
  }
  > .img {
    position: absolute;
    top: 1.9rem;
    width: .48rem;
    height: .48rem;
  }
  > .student {
    left: 1.2rem;
  }
  > .teacher {
    right: .4rem;
  }
`;

export default School;
