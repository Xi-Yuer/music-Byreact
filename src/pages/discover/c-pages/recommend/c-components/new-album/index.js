import React, { memo, useRef } from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";

import ThemeHeaderRCM from "@/components/theme-header-rcm";
import AlbumCover from "@/components/album-cover";

import { AlbumWrapper } from "./style";
import { useHistory } from "react-router-dom";

export default memo(function NewAlbum() {

  const carouselRef = useRef();
  const newalbum = useSelector((state) => state.newalbum);
  const history = useHistory()

const JumpToAlbumInfoPage = (item)=>{
  history.push({
    pathname:'/discover/newAlibumInfoPage',
    state:item
  })
}

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" target={'/discover/album'} />
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
                    return <div key={item.id} onClick = {e=>{JumpToAlbumInfoPage(item)}}><AlbumCover info={item} /></div>
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
