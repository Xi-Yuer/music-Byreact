import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Empty, Pagination } from 'antd';

import { StyleWrapper, Content } from './style';

import Title from '@/components/theme-header-rcm';
import AlbumCover from './c-components';

import { getAlbumInfo, getAlbumMoreInfo } from './getData';

export default memo(function Album() {

  const [hotAlbums = [], setHotAlbums] = useState();
  const [total, setTotal] = useState()
  const [otherAlbums, setOtherAlbums] = useState();
  const [limit, setLimit] = useState(21)
  const [offset, setOffset] = useState(0)

  const history = useHistory();

  useEffect(() => {
    getAlbumInfo(limit,offset).then(res => {
      setHotAlbums(res.albums);
      setTotal(res.total)
    });
  }, [limit,offset]);

  useEffect(() => {
    getAlbumMoreInfo('ALL').then(res => {
      console.log(res);
      setOtherAlbums(res.albums);
    });
    getAlbumInfo(21, 23).then(res => {
      setOtherAlbums(res.albums);
    });
  }, []);

  const JumpToAlbumInfoPage = item => {
    history.push({
      pathname: '/discover/newAlibumInfoPage',
      state: item,
    });
  };

  return (
    hotAlbums !== undefined ?(
      <StyleWrapper className='wrap-v2'>
        <Content>
          <div>
            <Title title='热门新碟' target={'/discover/album'} />
            <div className='hotAlbum'>
              {hotAlbums.map(item => {
                return (
                  <div
                    onClick={e => {
                      JumpToAlbumInfoPage(item);
                    }}
                    key={item.id}
                  >
                    <AlbumCover info={item}/>
                  </div>
                );
              })}
            </div>
              <div className='Pagination'>
                <Pagination 
                      defaultCurrent={1} 
                      total={total}
                      onChange={e=>{setOffset(e)}}
                      onShowSizeChange={(_,e)=>{setLimit(e)}}
                      pageSizeOptions={[21, 42, 64, 108]}
                      />
              </div>
          </div>
          <div className='regin'>
            <Title
              title='全部新碟'
              keyword={['全部', '华语', '欧美', '韩国', '日本']}
              target={'/discover/album'}
            />
            <div className='hotAlbum'>
              {otherAlbums !== undefined ? (
                otherAlbums.map(item => {
                  return (
                    <div
                      onClick={e => {
                        JumpToAlbumInfoPage(item);
                      }}
                      key={item.id}
                    >
                      <AlbumCover info={item} />
                    </div>
                  );
                })
              ) : (
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description='该接口需要登录'
                />
              )}
            </div>
          </div>
        </Content>
      </StyleWrapper>
    ):<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  );
});
