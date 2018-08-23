import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Boy, Girl } from 'src/images';

// 头像 Avatar
// /detailed/${props.user_id}

// export default observer((props: IProps) => {
//   return (
//     <StyledHead href={`/my`} className={props.sex}>
//       <img src={props.avatar} alt='' />
//     </StyledHead>
//   );
// });
@observer
export default class Avatar extends React.Component<IProps, {}> {

  public static defaultProps = {
    size: 'small',
    className: ''
  };

  public $f7: F7.Dom;

  public render() {
    const Theme = {
      size: this.props.size,
    };
    return (
      <StyledHead className={this.props.sex === 'female' ? 'avatar_girl' : 'avatar_boy'} onClick={this.onClick} theme={Theme}>
        {this.props.avatar && <img src={this.props.avatar} alt='' />}
      </StyledHead>
    );
  }

  private onClick = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    e.preventDefault();
    this.$f7.router.navigate(`/my`);
  }

}


interface IProps {
  user_id?: string | number;
  sex?: string;
  avatar?: string;
  size?: 'large' | 'small';
}

const StyledHead = Styled.p`
  flex: 0 0 auto;
  width: ${props => props.theme.size === 'small' ? '.8rem' : '.96rem'};
  height: ${props => props.theme.size === 'small' ? '.8rem' : '.96rem'};
  overflow: hidden;
  border-radius: 4px;
  margin-right: .16rem;
  background-size: 100% 100%;

  &.avatar_girl {
    background-image: url('${Girl}');
  }

  &.avatar_boy {
    background-image: url('${Boy}');
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
