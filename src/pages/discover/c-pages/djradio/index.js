import React, { createRef, memo, useEffect, useState } from 'react';

import { Carousel, Empty } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { getSizeImage } from '@/utils/format-utils';

import { StyleWrapper } from './style';

import { getdjNavInfo, getdjRecommend } from './getData';

import DjRadioItem from './djRadio-item';
import Nav from '@/components/theme-header-rcm';

export default memo(function Djradio() {
  const [categories = [], setCategories] = useState();
  const [type, setType] = useState(2001);
  const [djRadieInfo = [], setDjRadieInfo] = useState();
  const CarouselRef = createRef()
  useEffect(() => {
    getdjNavInfo().then(res => {
      setCategories(res.categories);
    });
  }, []);
  useEffect(() => {
    getdjRecommend(type).then(res => {
      setDjRadieInfo(res.djRadios);
    });
  }, [type]);
  return (
    categories.length !== 0 && (
      <StyleWrapper className='wrap-v2'>
        <div className='LeftOutlined' onClick={e=>CarouselRef.current.prev()} >
          <LeftOutlined />
        </div>
        <div className='RightOutlined' onClick={e=>CarouselRef.current.next()} >
          <RightOutlined />
        </div>
        <div>
          <Carousel ref={CarouselRef}>
            <div>
              <div className='carouselItem'>
                {categories.slice(0, 16).map(item => {
                  return (
                    <div
                      className='radioItem'
                      key={item.id}
                      onClick={e => setType(item.id)}
                    >
                      <img src={getSizeImage(item.pic56x56Url, 48)} alt='' />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className='carouselItem'>
                {categories.slice(16).map(item => {
                  return (
                    <div
                      className='radioItem'
                      key={item.id}
                      onClick={e => setType(item.id)}
                    >
                      <img src={getSizeImage(item.pic56x56Url, 48)} alt='' />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <Nav title='热门电台' target='/discover/djradio' />
        </div>
        <div className='djContent'>
          {djRadieInfo.length ? (
            djRadieInfo.map(item => {
              return <DjRadioItem djitem={item} key={item.id} />;
            })
          ) : (
            <div className='Empty'>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
          )}
        </div>
      </StyleWrapper>
    )
  );
});
