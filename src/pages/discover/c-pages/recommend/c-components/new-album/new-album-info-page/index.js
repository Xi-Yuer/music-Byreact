import React, { memo, useState,useEffect } from "react";

import { getNewAlbumInfo } from "./getData";
import { getSizeImage,formatDate } from '@/utils/format-utils'

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

export default memo(function NewAlbumInfoPage(props) {

  const id = props.location.state.id;

  const [{album, songs }, setAlbumInfo] = useState({})
  console.log(album);
  console.log(songs);
  useEffect(() => {
    getNewAlbumInfo(id).then((res) => {
        setAlbumInfo(res)
      });
  }, [id])
  return (
    (album !==undefined && songs!==undefined) && <RecommendWraper className="wrap-v2">
      <Content>
        <RecommendLeft>
            <div className='topInfo'>
                <div className="albumInfo">
                    <div>
                        <img src={getSizeImage(album.picUrl,177)} alt=""/>
                    </div>
                    <div>
                        <div>{album.name}</div>
                        <div>歌手： {album.artists[0].name}</div>
                        <div>发行时间： {formatDate(album.publishTime,'yyyy-MM-dd')}</div>
                        <div>发行公司 {album.company}</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </RecommendLeft>
        <RecommendRight>
          <h2>其他信息</h2>
        </RecommendRight>
      </Content>
    </RecommendWraper>
  );
});
