import React, { memo } from 'react';

import { StyleWrapper } from './style';

import { getSizeImage, formatDate } from '@/utils/format-utils';

import Tabal from './tabal';

export default memo(function RightDetail(props) {
  const { menuDetail } = props;
  return (
    menuDetail !== undefined && (
      <StyleWrapper>
        <div className='topInfo'>
          <div>
            <img
              src={getSizeImage(menuDetail.playlist.coverImgUrl, 150)}
              alt=''
            />
          </div>
          <div className='detailInfo'>
            <div>
              <h2>{menuDetail.playlist.name}</h2>
            </div>
            <div>
              创建时间：
              {formatDate(menuDetail.playlist.createTime, 'yyyy年MM月dd日')}
            </div>
            <div>{menuDetail.playlist.description}</div>
          </div>
        </div>
        <Tabal songs={menuDetail.playlist.tracks} />
      </StyleWrapper>
    )
  );
});
