import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Pagination } from 'antd';

import { getSizeImage, getCount } from '@/utils/format-utils';

import createAction from '@/store/create-action';
import { CHANGECURRENTALBUMID } from '@/store/config';

import { ThemeCoverWrapper, StylePagination } from './style';
export default memo(function Item(props) {
  const { item, pageCounter, offset } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const jumpToAlbum = item => {
    dispatch(createAction(CHANGECURRENTALBUMID, item.id));
    history.push({
      pathname: '/discover/albumInfo',
    });
  };

  const onChange = e => {
    offset(e);
  };

  const onShowSizeChange = (_, e) => {
    pageCounter(e);
  };

  const List = item.playlists || [];
  const Total = item.total;
  return (
    <div>
      {List.length !== 0 &&
        List.map(item => {
          return (
            <ThemeCoverWrapper
              key={item.id}
              right={'20px'}
              onClick={e => {
                jumpToAlbum(item);
              }}
            >
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
      <StylePagination className='Pagination'>
        <Pagination
          defaultCurrent={1}
          total={Total}
          defaultPageSize={20}
          onChange={onChange}
          onShowSizeChange={onShowSizeChange}
        />
      </StylePagination>
    </div>
  );
});
