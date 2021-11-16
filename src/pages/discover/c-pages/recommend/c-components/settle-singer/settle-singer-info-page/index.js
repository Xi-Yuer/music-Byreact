import React, { memo, useState, useEffect } from "react";

import { getSingerInfo, getSingerSongs,getSimiSinger } from "./getData";
import { getSizeImage } from "@/utils/format-utils";

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import SongList from "./songList";
import SimiSinger from './simi-singer'

export default memo(function SettleSingerPage(props) {
  const [songs, setSongs] = useState();
  const [singerIntroduction, setSingerIntroduction] = useState();
  const [showMore, setShowMore] = useState(true);

  const singerInfo = props.location.state;
  const id = props.location.state.id;

  const showMoreBtnClick = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    getSingerSongs(id).then((res) => {
      setSongs(res.songs);
    });
    getSingerInfo(id).then((res) => {
      setSingerIntroduction(res.introduction);
    });
    getSimiSinger(id).then((res)=>{
      console.log(res);
    })
  }, [id]);
  return (
    <RecommendWraper>
      <Content className="wrap-v2">
        <RecommendLeft showMore={showMore}>
          <div className="topContent">
            <div className="leftSingerAvator">
              <img src={getSizeImage(singerInfo.img1v1Url, 180)} alt="" />
            </div>
            <div className="singerInfo">
              <div className="name">
                <h2>{singerInfo.name}</h2>
              </div>
              <div className="describetion">
                {singerIntroduction &&
                  singerIntroduction.map((item) => {
                    return (
                      <div key={item.ti} className="introductionItem">
                        <b>{item.ti}：</b>
                        <p>{item.txt}</p>
                      </div>
                    );
                  })}
              </div>
              <span
                className="spreadMore"
                onClick={(e) => {
                  showMoreBtnClick();
                }}
              >
                {showMore ? "展开↓" : "收起↑"}
              </span>
            </div>
          </div>
          <SongList songs={songs} />
        </RecommendLeft>
        <RecommendRight>
          <SimiSinger/>
        </RecommendRight>
      </Content>
    </RecommendWraper>
  );
});
