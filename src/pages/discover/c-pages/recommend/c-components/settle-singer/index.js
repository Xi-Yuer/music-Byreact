import React, { memo } from "react";
import { useSelector } from 'react-redux'

import { getSizeImage } from "@/utils/format-utils";

import HYThemeHeaderSmall from "@/components/theme-header-small";
import { SetterSongerWrapper } from "./style";

export default memo(function HYSettleSinger() {
  const singer = useSelector(state => state.HotArtists)
  return (
    <SetterSongerWrapper>
      <HYThemeHeaderSmall title="热门歌手" more="查看全部>" />
      <div className="singer-list">
        {singer.map((item, index) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join("") || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <span>申请成为网易音乐人</span>
      </div>
    </SetterSongerWrapper>
  );
});
