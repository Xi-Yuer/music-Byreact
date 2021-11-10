import React, { memo, useState, useRef, useCallback } from "react";

import { useSelector } from 'react-redux'

import { Carousel } from "antd";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

export default memo(function TopBanner() {
  
  const banners = useSelector(state => state.banners)
  const BannerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0)

  const beforeChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, []);

  return (
    <div>
      <BannerWrapper bgImage={banners[currentIndex]?.imageUrl}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel
              effect="fade"
              autoplay
              ref={BannerRef}
              beforeChange={beforeChange}
            >
              {banners.length && banners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <a href={item.url}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                    </a>
                  </div>
                );
              })}
            </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button
              onClick={(e) => {
                BannerRef.current.prev();
              }}
              className="btn left"
            ></button>
            <button
              onClick={(e) => {
                BannerRef.current.next();
              }}
              className="btn right"
            ></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  );
});
