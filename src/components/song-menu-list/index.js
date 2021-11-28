import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Empty } from 'antd';

import { CHANGEPLAYLIST } from '@/store/config';
import createAction from '@/store/create-action';

import { SendMusicRquest } from '@/services/music-data';
import { formatDate } from '@/utils/format-utils';

import { RecommendWraper, RecommendLeft } from './style';

export default memo(function SongMenuList() {

  const dispatch = useDispatch();

  const songs = useSelector(state => state.playList);
  const itemClick = id => {
    dispatch(SendMusicRquest(id));
    dispatch(createAction(CHANGEPLAYLIST, songs));
  };

  return (
    <RecommendWraper>
      <RecommendLeft>
        <div className='header'>
          <span className='span1'></span>
          <span className='span2'>歌曲标题</span>
          <span className='span3'>时长</span>
          <span className='span4'>歌手</span>
        </div>
        {songs.length?songs.map((item, index) => {
          return (
            <div className='header musicList' key={item.id}>
              <span className='span1 text-nowrap'>{index + 1}</span>
              <span className='span2 text-nowrap'>
                <i
                  className='iconfont icon24gl-play'
                  onClick={e => {
                    itemClick(item.id);
                  }}
                >
                  {' '}
                </i>
                {item.name}
              </span>
              <span className='span3 text-nowrap'>
                {formatDate(item.dt, 'mm:ss')}
              </span>
              <span className='span4 text-nowrap'>{item.ar[0].name}</span>
            </div>
          );
        }):<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </RecommendLeft>
    </RecommendWraper>
  );
});
