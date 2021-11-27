import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Pagination } from 'antd';

import { StyleWrapper } from './style';

import { formatDate } from '@/utils/format-utils';
import { SendMusicRquest } from '@/services/music-data';

import { CHANGEPLAYLIST } from '@/store/config';
import createAction from '@/store/create-action';

export default memo(function SongList(props) {
  const { songs = [] } = props;
  const dispatch = useDispatch();
  let [pageCount, setPageCount] = useState(1);

  const itemClick = id => {
    dispatch(SendMusicRquest(id));
    dispatch(createAction(CHANGEPLAYLIST, songs));
  };

  // 页
  const onChange = e => {
    console.log(e);
    setPageCount(e);
  };

  const onShowSizeChange = (_,e) => {
    console.log(e);
  };

  return (
    songs.length !== 0 && (
      <StyleWrapper>
        <div className='albumSongs'>
          <div className='title'>
            <h2>歌手热门歌曲</h2>
            <span>
              包含 <b>{songs.length}</b> 首歌
            </span>
          </div>
          <div>
            <div className='header'>
              <span className='span1'></span>
              <span className='span2'>歌曲标题</span>
              <span className='span3'>时长</span>
              <span className='span4'>歌手</span>
              <span className='span5'>专辑</span>
            </div>
            {songs
              .slice((pageCount - 1) * 10, pageCount * 10)
              .map((item, index) => {
                return (
                  <div className='header musicList' key={item.id}>
                    <span className='span1 text-nowrap'>
                      {index + 1 + pageCount * 10-10}
                    </span>
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
                    <span className='span5 text-nowrap'>{item.al.name}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className='Pagination'>
          <Pagination
            defaultCurrent={1}
            total={songs.length - 1}
            onChange={onChange}
            onShowSizeChange={onShowSizeChange}
          />
        </div>
      </StyleWrapper>
    )
  );
});
