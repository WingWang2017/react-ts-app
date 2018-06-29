import WpShare from './share';


const share = (props: any) => {
  return WpShare(Object.assign({}, {
    type: 'default'
  }, props));
};

export default share;
