import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Boy, Girl, boy_icon, girl_icon } from 'src/images';

// || user && user.sex === 1 ? Boy : Girl
@observer
export default class Head extends React.Component<IProps, IState> {

  public static defalutProps = {
    sex: 0
  };

  public state = {
    user: localStorage.user && JSON.parse(localStorage.user),
    head: this.props.head || Boy || Girl
  };

  public $f7: any;

  public photoBrowser: any;

  public render() {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const theme = {
      sex: user && user.sex === 1 ? boy_icon : girl_icon
    };
    return (
      <StyledDiv>
        <StyledHead theme={theme}>
          <dt>
            <img src={this.state.head} alt='' onClick={this.onClick} />
          </dt>
          <dd>
            <p className='name'>{user && user.realname || '自己'}</p>
            <p className='number'>{user && user.study_sn || '学号'}</p>
          </dd>
          <dd className='class'>数字媒体1402班</dd>
        </StyledHead>
        <StyledUL>
          <li className='border-right'><a href='#' title=''>校友圈 1</a></li>
          <li className='border-right'><a href='#' title=''>关注 2</a></li>
          <li className='border-right'><a href='#' title=''>粉丝 3</a></li>
        </StyledUL>
      </StyledDiv>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {
    document.removeEventListener('deviceready', this.deviceready.bind(this), false);
  }

  private onClick = (): void => {
    this.photoBrowser = this.$f7.photoBrowser.create({
      photos: [`${this.state.head}`],
      theme: 'dark',
      type: 'standalone',
      exposition: true,
      navbar: true,
      toolbar: false,
      renderNavbar: () => {
        return `<div class='photoBrowser-header'>
          <div class='left'></div>
          <div class='center'>我的头像</div>
          <div class='right'></div>
        </div>`;
      },
      on: {
        open: () => {
          this.onStatusBar('#333333');
          this.$f7.$('.photoBrowser-header .left').on('click', () => {
            this.photoBrowser.close();
          });
          this.$f7.$('.photoBrowser-header .right').on('click', () => {
            import('src/components/actions').then(({ default: actions }) => {
              actions.customize({
                title: '拍照',
                confirmText: '从手机相册选择',
                onDefine: this.openCamera,
                onConfirm: this.openFilePicker
              });
            });
          });
        },
        closed: () => {
          this.onStatusBar('#81D8D0');
          this.photoBrowser.destroy();
        },
        click: () => {
          this.photoBrowser.close();
        }
      }
    });
    this.photoBrowser.open();
  }

  private openCamera = (): void => {
    const srcType = Camera.PictureSourceType.CAMERA;
    const options = this.setOptions(srcType, true);
    this.getPicture(options);
  }

  private openFilePicker = (): void => {
    const srcType = Camera.PictureSourceType.PHOTOLIBRARY;
    const options = this.setOptions(srcType, false);
    this.getPicture(options);
  }

  private getPicture(options: any) {
    navigator.camera.getPicture((imageUri: any) => {
      this.cameraSuccess(imageUri);
    }, (error: any) => {
      this.cameraError(error);
    }, options);
  }

  // 提供图像数据的回调函数。
  private cameraSuccess(imageUri: any) {
    this.photoBrowser.close();
    setTimeout(() => {
      this.setState({
        head: imageUri
      });
    }, 5000);
    // alert(imageUri);
  }

  // 回调函数，提供相机错误消息。
  private cameraError(error: any) {
    // alert("Unable to obtain picture: " + error);
  }

  // 自定义相机设置参数
  private setOptions(srcType: any, allowEdit: boolean) {
    return {
      // 保存图像的质量，一些常见的设置是20, 50和100。
      quality: 50,
      // 图片选择返回值的格式。 DATA_URL => base64, FILE_URI => 文件uri, NATIVE_URI => 返回原生uri
      destinationType: Camera.DestinationType.NATIVE_URI,
      // 在这个应用程序中，动态设置图片源、相机或照片库。
      sourceType: srcType,
      // 选择返回图片的格式
      encodingType: Camera.EncodingType.JPEG,
      // 选择展示的文件， PICTURE => 图片， VIDEO => 视频， ALLMEDIA => 所有媒体类型
      mediaType: Camera.MediaType.PICTURE,
      // 在选择之前允许简单编辑图像
      allowEdit,
      // 修正Android定位怪癖
      correctOrientation: true
    };
  }

  private onStatusBar(color: string): void {
    document.addEventListener('deviceready', this.deviceready.bind(this, color), false);
  }

  private deviceready(color: string): void {
    StatusBar.backgroundColorByHexString(color);
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  head?: string;
  sex?: number;
}

interface IState {
  user: any;
  head: any;
}

const StyledDiv = Styled.div`
  padding: .34rem .32rem 0;
  background-color: #fff;
`;

const StyledHead = Styled.dl`
  clear: both;
  dt {
    float: left;
    overflow: hidden;
    width: 1.28rem;
    height: 1.28rem;
    margin-right: .32rem;
    border-radius: 4px;
  }
  dt img {
    display: block;
    border-radius: 4px;
    width: 100%;
    height: auto;
  }
  dd {
    display: flex;
    align-items: center;
    height: .64rem;
  }
  .name {
    margin-right: .15rem;
    padding-right: .5rem;
    background: no-repeat 100%;
    background-origin: padding-box;
    background-size: .4rem .4rem;
    background-image: url("${props => props.theme.sex}");
    font-size: .4rem;
  }
  .number {
    font-size: .24rem;
    color: #119C8F;
  }
  .class {
    font-size: .24rem;
    color: #999;
  }
`;

const StyledUL = Styled.ul`
  display: flex;
  height: .88rem;
  padding: .24rem 0;
  margin-top: .32rem;
  box-sizing: border-box;
  li {
    position: relative;
    width: 33.3%;
    text-align: center;
  }
  a {
    display: block;
  }
`;
