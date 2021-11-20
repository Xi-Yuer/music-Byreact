import React, { memo } from 'react';


import { StyleWrapper } from './style'

import { getSizeImage,formatDate } from '@/utils/format-utils';
export default memo(function SimiMv(props) {
  const { simiMv=[], simiMvClick } = props;
  const itemClick = (item)=>{
      simiMvClick(item.id)
  }
  return (
    <StyleWrapper>
      {simiMv.length !== 0 &&
        simiMv.map(item => {
          return (
            <div key={item.id} className='content'onClick={e=>{itemClick(item)}}>
              <div>
                <img src={getSizeImage(item.cover, 96, 54)} alt='' />
              </div>
              <div className='info'>
                <span className='text-nowrap decribtion title'>{item.name}</span>
                <span className='text-nowrap decribtion'>{formatDate(item.duration,'mm:ss')}</span>
                <span className='text-nowrap decribtion name'>by{
                    item.artists[0].name}</span>
              </div>
            </div>
          );
        })}
    </StyleWrapper>
  );
});
