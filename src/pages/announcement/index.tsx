import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header } from 'src/components';

import { monthAndDayHours } from 'src/utils';

import fetchAjax from 'src/fetch';

import { fenxiangIcon } from 'src/images';

interface IProps {
	f7router?: any;
	f7route?: any;
}
interface IState {
	data: any;
	opened: boolean;
}

@observer
export default class Announcement extends React.Component<IProps, IState> {

	public state = {
		data: {},
		opened: false // <= 分享弹出框默认状态，隐藏
	};

	public $f7: any;

	public componentDidMount(): void {
		// const { thumb_type } = currentRoute.params;
		// if (thumb_type === '0') {
		// 	this.getInfoData();
		// } else {
		// 	this.getBannerData();
		// }
		this.getInfoData();
	}

	public onShare = (): void => {
		import('src/components/share').then(({ default: share }) => {
			share({});
		});
	}

	public getInfoData(): void {
		fetchAjax.getDynamicCampusInfo(this.props.f7route.params.id).then(res => {
			if (res.errcode) {
				this.setState({
					data: res.resource
				});
			}
		});
	}

	public getBannerData(): void {

	}

	public render() {
		return (
			<div data-name='announcement' className='navbar-fixed page'>
				<Header
					center='公告'
					back={true}
					right={
						<a href='#' className='link' onClick={this.onShare} >
							<img src={fenxiangIcon} alt='点击分享' className='wpIcon' width='.36rem' />
						</a>
					}
				/>
				<div className='page-content page-content-home'>
					<AnnouncementContent data={this.state.data} />
				</div>
			</div>
		);
	}
}

const AnnouncementContent = observer(({ data }) => (
	<StyledDiv className='announcement'>
		<div className='announcementTitle'>{data.title}</div>
		<div className='announcementStatus'>{data.create_user_name}
			<time>{data.public_time && monthAndDayHours(data.public_time)}</time>
		</div>
		<div className='announcementText' dangerouslySetInnerHTML={{ __html: data.content }} />
	</StyledDiv>
));

const StyledDiv = Styled.div`
	padding: 0.2rem 0.36rem;

	.announcementTitle {
		line-height: 1.6;

		font-size: 0.44rem;
		color: #000;
	}
	.announcementStatus {
		margin: 0.15rem 0 0.35rem;
		line-height: 1.4;
		font-size: 0.24rem;
		color: #888;
	}
	.announcementText {
		line-height: 1.8;
		font-size: 0.3rem;
		color: #353535;
		overflow-x: hidden;
	}
	.announcementText img {
		width: 100% !important;
		height: auto !important;
		display: block;
		margin: 0.1rem 0;
	}
	.announcementText table {
		width: 100% !important;
	}
`;
