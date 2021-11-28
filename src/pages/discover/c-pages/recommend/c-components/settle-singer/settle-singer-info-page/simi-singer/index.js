import React, { memo } from 'react'
import { useHistory } from "react-router-dom";

import { Empty } from 'antd';


import { getSizeImage } from "@/utils/format-utils";

import HYThemeHeaderSmall from "@/components/theme-header-small";
import { SetterSongerWrapper } from "./style";
export default memo(function SimiSinger(props) {

const { singer=[] } = props

  const history = useHistory()

  const jumpToSettleSingerInfoPage = item => {
    history.push('/discover/settleSingerInfoPage',item)
  }
    return (
        <SetterSongerWrapper>
        <HYThemeHeaderSmall title="相似歌手" />
        <div className="singer-list">
          {singer.length !== 0 ? singer.slice(0,6).map((item, index) => {
            return (
              <span key={item.id} className="item" onClick={e => {jumpToSettleSingerInfoPage(item) }}>
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </span>
            );
          }):<Empty description='暂无相似歌手' image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        </div>
      </SetterSongerWrapper>
    )
})
