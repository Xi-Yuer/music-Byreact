import React, { memo } from 'react';
import { useHistory } from 'react-router-dom'
import {useDispatch } from 'react-redux'

import { getSizeImage, getCount } from '@/utils/format-utils';

import createAction from '@/store/create-action'
import { CHANGECURRENTALBUMID } from '@/store/config'

import { ThemeCoverWrapper } from './style';
export default memo(function Item(props) {
  const { item } = props;

  const history = useHistory()
  const dispatch = useDispatch()
  const jumpToAlbum = (item)=> {
    dispatch(createAction(CHANGECURRENTALBUMID,item.id))
    history.push({
      pathname:'/discover/albumInfo'
    })
  }

  return (
    <div>
      {item.length!==0 && item.map(item => {
        return (
          <ThemeCoverWrapper key={item.id} right={'20px'} onClick={ e =>{ jumpToAlbum(item) }}>
            <div className='cover-top'>
              <img
                src={getSizeImage(item.picUrl || item.coverImgUrl, 140)}
                alt=''
              />
              <div className='cover sprite_covor'>
                <div className='info sprite_covor'>
                  <span>
                    <i className='sprite_icon erji'></i>
                    {getCount(item.playCount)}
                  </span>
                  <i className='sprite_icon play'></i>
                </div>
              </div>
            </div>
            <div className='cover-bottom text-nowrap'>{item.name}</div>
            <div className='cover-source'>
              by {item.copywriter || item.creator?.nickname}
            </div>
          </ThemeCoverWrapper>
        );
      })}
    </div>
  );
});
