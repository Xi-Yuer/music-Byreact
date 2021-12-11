import React, { memo, useState } from 'react';

import { PlayerLeft } from './style';
import { getSizeImage, formatDate } from '@/utils/format-utils';

import { getAlbumInfo } from './getData';
import { getUserInfo } from '../../api';

import ListItem from '@/pages/discover/c-pages/recommend/c-components/album-info/c-components/list-item';
import { Pagination } from 'antd';

export default memo(function SongMenuList(props) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);
  const [playlist = [], setPlayList] = useState();
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));

  const getMenuSongList = id => {
    getAlbumInfo(id).then(res => {
      setPlayList(res.playlist);
    });
  };

  props.location.state===undefined
    ? getUserInfo(userInfo.id).then(res => {
        getMenuSongList(res.playlist[1]?.id);
      })
    : getMenuSongList(props.location.state);

  return (
    playlist.length !== 0 && (
      <PlayerLeft>
        <div className='albumInfo'>
          <div className='albumInfoImg'>
            <img src={getSizeImage(playlist.coverImgUrl, 208)} alt='' />
          </div>
          <div className='albumInfoRight'>
            <div>
              <p className='albuName'>{playlist.name}</p>
            </div>
            <div className='artarInfo'>
              <img src={getSizeImage(playlist.creator.avatarUrl, 35)} alt='' />
              <span className='nickName'>{playlist.creator.nickname}</span>
              <span className='createTime'>
                {formatDate(playlist.updateTime, 'yyyy-MM-dd')}&nbsp;创建
              </span>
            </div>
            <div>
              标签：
              {playlist.tags.map(item => {
                return (
                  <span className='tags' key={item}>
                    {item}
                  </span>
                );
              })}
            </div>
            <div className='description'>介绍：{playlist.description}</div>
          </div>
        </div>
        <div className='albumSongs'>
          <div className='title'>
            <h2>歌曲列表({playlist.trackIds.length}首歌)</h2>
            <span>
              播放<b>{playlist.playCount}</b> 次
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
            {playlist.trackIds
              .slice(currentPage * 10 - 10, currentPage * pageCount)
              .map((item, index) => {
                return (
                  <ListItem
                    key={item.id}
                    id={item.id}
                    index={index}
                    currentPage={currentPage}
                  />
                );
              })}
          </div>
          <div className='Pagination'>
            <Pagination
              defaultCurrent={1}
              total={playlist.trackIds.length}
              onChange={e => setCurrentPage(e)}
              onShowSizeChange={(_, e) => {
                setPageCount(e);
              }}
            />
          </div>
        </div>
      </PlayerLeft>
    )
  );
});
