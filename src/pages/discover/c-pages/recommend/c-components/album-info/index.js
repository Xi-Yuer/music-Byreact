import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style';
import { getAlbumInfo, getSimiAlbums } from './getData';
import { getSizeImage, formatDate } from '@/utils/format-utils';

import createAction from '@/store/create-action';
import { CHANGECURRENTALBUMID } from '@/store/config';

import ListItem from './c-components/list-item';
import { Pagination } from 'antd';

export default memo(function AlbumInfo() {

  const dispatch = useDispatch();
  const currentAlbumId = useSelector(state => state.currentAlbumId);
  const [{ playlist = [], id }, setAlbumInfo] = useState(2087916692);
  const [simiAlbum = [], setSimiAlbum] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getAlbumInfo(currentAlbumId)
      .then(res => {
        setAlbumInfo(res);
        return res.privileges[0].id;
      })
      .then(id => {
        getSimiAlbums(id).then(res => {
          setSimiAlbum(res.playlists);
        });
      });
  }, [currentAlbumId, id]);

  const jumpToAlbumInfo = item => {
    dispatch(createAction(CHANGECURRENTALBUMID, item.id));
  };

  return (
    playlist.length === 0 || (
      <PlayerWrapper>
        <div className='content wrap-v2'>
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
                  <img
                    src={getSizeImage(playlist.creator.avatarUrl, 35)}
                    alt=''
                  />
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
                {playlist.trackIds.slice(currentPage*10-10, currentPage*10).map((item, index) => {
                  return <ListItem key={item.id} id={item.id} index={index} currentPage={currentPage} />;
                })}
              </div>
              <div className='Pagination'>
                <Pagination 
                defaultCurrent={1} 
                total={playlist.trackIds.length}
                onChange={e=>setCurrentPage(e)}
                 />
              </div>
            </div>
          </PlayerLeft>
          <PlayerRight>
            <div className='leftItem'>
              <div className='header'>
                <b>喜欢这个歌单的人</b>
              </div>
              <div className='subscribersUserImg'>
                {playlist.subscribers.map(item => {
                  return (
                    <img
                      src={getSizeImage(item.avatarUrl, 40)}
                      key={item.userId}
                      alt=''
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <div className='header'>
                <b>相似歌单</b>
              </div>
              {simiAlbum.length !== 0 &&
                simiAlbum.map((item, index) => {
                  return (
                    <div
                      key={item.coverImgId}
                      className='simiAlbumContent'
                      onClick={e => {
                        jumpToAlbumInfo(item);
                      }}
                    >
                      <div>
                        <img src={getSizeImage(item.coverImgUrl, 50)} alt='' />
                      </div>
                      <div className='simiAlbumRight'>
                        <div className='simiAlbumName text-nowrap'>
                          {item.name}
                        </div>
                        <div className='simiAlbumNickName text-nowrap'>
                          by&nbsp;{item.creator.nickname}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </PlayerRight>
        </div>
      </PlayerWrapper>
    )
  );
});
