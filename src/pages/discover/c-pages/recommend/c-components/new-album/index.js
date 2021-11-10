import React, { memo, useRef } from "react";
import { useSelector } from 'react-redux'
import { Carousel } from "antd";

import ThemeHeaderRCM from "@/components/theme-header-rcm";
import AlbumCover from "@/components/album-cover";

import { AlbumWrapper } from "./style";

export default memo(function NewAlbum() {
  const carouselRef = useRef();
  const newalbum = useSelector(state => state.newalbum)
  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newalbum.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumCover key={item.id} info={item} />;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></div>
      </div>
    </AlbumWrapper>
  );
});
