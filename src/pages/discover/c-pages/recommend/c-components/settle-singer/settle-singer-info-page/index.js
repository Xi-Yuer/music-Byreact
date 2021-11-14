import React, { memo, useState, useEffect } from "react";

import { getSingerInfo, getSingerSongs } from "./getData";
import { getSizeImage } from "@/utils/format-utils";

import { RecommendWraper, Content, RecommendLeft } from "./style";

export default memo(function SettleSingerPage(props) {
  const [songs, setSongs] = useState();
  const [singerIntroduction, setSingerIntroduction] = useState();
  const [showMore, setShowMore] = useState(false)

  const singerInfo = props.location.state;
  const id = props.location.state.id;

const showMoreBtnClick = ()=>{
    setShowMore(!showMore)
}

  useEffect(() => {
    getSingerSongs(id).then((res) => {
      setSongs(res.songs);
    });
    getSingerInfo(id).then((res) => {
      setSingerIntroduction(res.introduction);
    });
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
                {singerIntroduction && singerIntroduction.map((item) => {
                  return (
                    <div key={item.ti} className="introductionItem">
                      <b>{item.ti}：</b>
                      <p>{item.txt}</p>
                    </div>
                  );
                })}
              </div>
              <span className='spreadMore' onClick={e=>{showMoreBtnClick()}}>{showMore?'展开↓':'收起↑'}</span>
            </div>
          </div>
        </RecommendLeft>
      </Content>
    </RecommendWraper>
  );
});
