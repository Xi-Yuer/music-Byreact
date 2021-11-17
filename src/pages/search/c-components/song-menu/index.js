import React, { memo } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import createAction from '@/store/create-action';
import { CHANGECURRENTALBUMID } from '@/store/config';

import { StyleWrapper } from './style';
import { getCount, getSizeImage } from '@/utils/format-utils';

export default memo(function SongMenu(props) {

  const { searchKeywords, songsmenu = [] } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const itemClick = id => {
    dispatch(createAction(CHANGECURRENTALBUMID, id));
    history.push({
      pathname: '/discover/albumInfo',
    });
  };
  return (
    songsmenu.length !== 0 && (
      <StyleWrapper>
        <div className='albumSongs'>
          <div className='title'>
            <h2>搜索"{searchKeywords}"</h2>
            <span>
              找到 <b>{songsmenu.length}</b> 张歌单
            </span>
          </div>
          <div>
            <div className='header'>
              <span className='span1'></span>
              <span className='span2'>专辑</span>
              <span className='span3'>歌手</span>
              <span className='span4'>歌曲量</span>
              <span className='span5'>描述</span>
              <span className='span6'>播放量</span>
            </div>
            {songsmenu.map((item, index) => {
              return (
                <div
                  className='header musicList'
                  key={item.id}
                  onClick={e => {
                    itemClick(item.id);
                  }}
                >
                  <span className='span1 text-nowrap'>{index + 1}</span>
                  <span className='span2 text-nowrap'>
                    <img src={getSizeImage(item.coverImgUrl, 50)} alt='' />
                    <span>{item.name}</span>
                  </span>
                  <span className='span3 text-nowrap'>{item.name}</span>
                  <span className='span4 text-nowrap'>{item.trackCount}</span>
                  <span className='span5 text-nowrap'>{item.description}</span>
                  <span className='span6 text-nowrap'>
                    {getCount(item.playCount)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </StyleWrapper>
    )
  );
});
