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
    size: 'small'
  };

  public $f7: F7.Dom;

  public render() {
    const Theme = {
      size: this.props.size
    };
    return (
      <StyledHead className={this.props.sex} onClick={this.onClick} theme={Theme}>
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

const StyledHead = Styled.p.attrs({
  className: (props: any) => props.theme.className === 'female' ? Girl : Boy,
  size: (props: any) => props.theme.size === 'small' ? '.8rem' : '.96rem'
})`
  flex: 0 0 auto;
  width: ${props => props.size};
  height: ${props => props.size};
  overflow: hidden;
  border-radius: 4px;
  margin-right: .16rem;
  background-size: 100% 100%;
  background-image: url('${props => props.className}');
  & img {
    width: 100%;
    height: 100%;
  }
`;
