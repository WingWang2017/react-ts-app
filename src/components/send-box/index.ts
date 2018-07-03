import WpSendBox from './sendBox';

interface ISendBox { default: any; success: any; }

const sendBox = {} as ISendBox;

sendBox.default = (props: any) => {
	return WpSendBox(Object.assign({}, {
		type: 'default'
	}, props));
};

export default sendBox;
