import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SendMusicRquest } from '@/services/music-data';

import { formatDate } from '@/utils/format-utils';
import { getItemInfo } from '../../getData';

export default memo(function ListItem(props) {
  const { id, index, currentPage } = props;
  const [item = [], setItem] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    getItemInfo(id).then(res => {
      setItem(res.songs[0]);
    });
  }, [id]);

  const itemClick = id => {
    dispatch(SendMusicRquest(id));
  };

  return (
    item.length !== 0 && (
      <div className='header musicList' key={item.id}>
        <span className='span1 text-nowrap'>{index + 1*currentPage*10-9}</span>
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
    )
  );
});
