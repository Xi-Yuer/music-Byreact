import React, { memo } from 'react';

import { StyleWrapper } from './style';

import { getSizeImage, formatDate } from '@/utils/format-utils';
export default memo(function SimiMv(props) {
  const { simiVide = [], simiVideoClick } = props;
  const itemClick = item => {
    simiVideoClick(item.vid);
  };
  return (
    <StyleWrapper>
      {simiVide.length !== 0 &&
        simiVide.map(item => {
          return (
            <div
              key={item.vid}
              className='content'
              onClick={e => {
                itemClick(item);
              }}
            >
              <div>
                <img src={getSizeImage(item.coverUrl, 96, 54)} alt='' />
              </div>
              <div className='info'>
                <span className='text-nowrap decribtion title'>
                  {item.title}
                </span>
                <span className='text-nowrap decribtion'>
                  {formatDate(item.durationms, 'mm:ss')}
                </span>
                <span className='text-nowrap decribtion name'>
                  by{item.creator[0].userName}
                </span>
              </div>
            </div>
          );
        })}
    </StyleWrapper>
  );
});
