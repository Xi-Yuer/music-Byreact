import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { VideoCameraOutlined } from '@ant-design/icons';

import { getSizeImage, getCount } from '@/utils/format-utils';

import { StyleWrapper, StyleTop } from './style';

export default memo(function Video(props) {
  const { video = [], searchKeywords, total } = props;
  const history = useHistory()

  const jumpToVideInfoPage = item => {
    history.push('/discover/viedeoinfopage',item)
  }
  return (
    <div>
      <StyleTop className='title'>
        <h2>搜索"<span className='searchKeywords'>{searchKeywords}</span>"</h2>
        <span>
          找到 <b>{total}</b> 个视频
        </span>
      </StyleTop>
      <StyleWrapper>
        {video.length !== 0 &&
          video.map(item => {
            return (
              <div key={item.vid} className='item' onClick={e=>{jumpToVideInfoPage(item)}}>
                <div>
                  <div className='playCount'>
                    <div className='playCountIcon'>
                      <VideoCameraOutlined />
                      <span>{getCount(item.playTime)}</span>
                    </div>
                  </div>
                  <img src={getSizeImage(item.coverUrl, 160, 90)} alt='' />
                </div>
                <div>
                  <span className='title'>{item.title}</span>
                </div>
                <div>
                  <span className='name'>{item.creator[0].userName}</span>
                </div>
              </div>
            );
          })
          }
      </StyleWrapper>
    </div>
  );
});
