import React, { memo } from 'react';

import { useHistory } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';

import { StyleWrapper } from './style';

export default memo(function DjRadioItem(props) {
  const { djitem } = props;
  const history = useHistory();
  const itemClick = item => {
    history.push('/discover/diradioinfopage',item);
  };
  return (
    <StyleWrapper
      onClick={e => {
        itemClick(djitem);
      }}
    >
      <div>
        <img src={getSizeImage(djitem.picUrl, 120)} alt='' />
      </div>
      <div className='info'>
        <span className='name text-nowrap'>{djitem.name}</span>
        <span className='creater'>{djitem.dj.nickname}</span>
        <span className='sub'>
          共{djitem.programCount}期 订阅：{djitem.subCount}次
        </span>
      </div>
    </StyleWrapper>
  );
});
