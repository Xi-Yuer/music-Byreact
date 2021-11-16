import React, { memo } from 'react'
// import { getSizeImage } from "@/utils/format-utils";

import HYThemeHeaderSmall from "@/components/theme-header-small";
import { SetterSongerWrapper } from "./style";
export default memo(function SimiSinger() {
    return (
        <SetterSongerWrapper>
        <HYThemeHeaderSmall title="相似歌手" />
        {/* <div className="singer-list">
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
        </div> */}
      </SetterSongerWrapper>
    )
})
