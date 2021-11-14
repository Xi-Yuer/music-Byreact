import React, { memo } from "react";
import { useSelector } from 'react-redux'

import { getSizeImage } from "@/utils/format-utils";

import HYThemeHeaderSmall from "@/components/theme-header-small";
import { SetterSongerWrapper } from "./style";
import { useHistory } from "react-router-dom";




export default memo(function HYSettleSinger() {

  const singer = useSelector(state => state.HotArtists)

  const history = useHistory()

  const jumpToSettleSingerInfoPage = item => {
    history.push('/discover/settleSingerInfoPage',item)
  }

  return (
    <SetterSongerWrapper>
      <HYThemeHeaderSmall title="热门歌手" more="查看全部>" />
      <div className="singer-list">
        {singer.map((item, index) => {
          return (
            <span key={item.id} className="item" onClick={e => {jumpToSettleSingerInfoPage(item) }}>
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join("") || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </span>
          );
        })}
      </div>
      <div className="apply-for">
        <span>申请成为网易音乐人</span>
      </div>
    </SetterSongerWrapper>
  );
});
