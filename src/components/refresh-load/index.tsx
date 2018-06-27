import * as React from 'react';

const RefreshLoad = (props: IProps) => (
  <div
    className={`page-content page-content-home pull-to-refresh-content infinite-scroll ${props.className || ''}`}
    data-ptr-distance={props.ptrDistance || 55}
    data-distance={props.distance || 0} >
    <div className='pull-to-refresh-layer'>
      <div className='preloader' />
      <div className='pull-to-refresh-arrow' />
    </div>
    {
      props.children
    }
    <div className='infinite-scroll-preloader'>
      <div className='preloader' />
    </div>
  </div>
);

interface IProps {
  className?: string;
  ptrDistance?: number;
  distance?: number;
  children?: any;
}

export default RefreshLoad;
