import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';

import { getSizeImage } from '@/utils/format-utils';

import { StyleTop, StyleWrapper } from './style';

export default memo(function Singer(props) {
  const { singer, searchKeywords,total } = props;

  const history = useHistory();
  const jumpToSettleSingerInfoPage = item => {
    history.push('/discover/settleSingerInfoPage', item);
  };
  return (
    singer !== undefined && (
      <div>
        <StyleTop className='title'>
          <h2>搜索"<span className='searchKeywords'>{searchKeywords}</span>"</h2>
          <span>
            找到 <b>{total}</b> 个歌手
          </span>
        </StyleTop>
        <StyleWrapper>
          {singer.map(item => {
            return (
              <div
                key={item.id}
                className='item'
                onClick={e => {
                  jumpToSettleSingerInfoPage(item);
                }}
              >
                <img src={getSizeImage(item.picUrl, 130)} alt='' />
                <div className='name'>
                  <UserOutlined />
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </StyleWrapper>
      </div>
    )
  );
});
