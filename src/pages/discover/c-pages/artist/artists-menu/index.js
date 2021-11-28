import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { Pagination } from 'antd';

import { StyleWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils';
export default memo(function ArtistsMenu(props) {
  const { artists, setOffset, setLimit } = props;

  const history = useHistory();

  const jumpToSettleSingerInfoPage = item => {
    history.push('/discover/settleSingerInfoPage', item);
  };
  const onChange = e => {
    setOffset(e);
  };
  const onShowSizeChange = (_, e) => {
    setLimit(e);
  };

  return (
    <StyleWrapper>
      {artists !== undefined &&
        artists.map(item => {
          return (
            <div
              className='artistItem'
              key={item.id}
              onClick={e => {
                jumpToSettleSingerInfoPage(item);
              }}
            >
              <div>
                <img src={getSizeImage(item.img1v1Url, 130)} alt='' />
              </div>
              <div>
                <span className='artstName'>{item.name}</span>
              </div>
            </div>
          );
        })}
      <Pagination
        className='Pagination'
        defaultCurrent={1}
        total={490}
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
      />
    </StyleWrapper>
  );
});
