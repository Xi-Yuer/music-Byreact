import React, { memo } from "react";
import { getSizeImage } from "@/utils/format-utils";
import { StyleWrapper } from "./style";
export default memo(function LeftMenu(props) {
  const { menuList, setId } = props;
  return (
    <StyleWrapper>
      <h2>排行榜</h2>
      {menuList.map((item) => {
        return (
          <div className="item" key={item.name} onClick={(e) => setId(item.id)}>
            <div>
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
            </div>
            <div className="info">
              <span>{item.name}</span>
              <span className="timer">{item.updateFrequency}</span>
            </div>
          </div>
        );
      })}
    </StyleWrapper>
  );
});
