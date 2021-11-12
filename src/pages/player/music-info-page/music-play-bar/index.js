import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { MusicPlayBarWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
export default memo(function MusicPlayBar() {
  const musicImgUrl = useSelector(
    (state) => state.CurrentMusicInfo.al.picUrl,
    shallowEqual
  );
  return (
    <MusicPlayBarWrapper>
      <div className="wrapper">
      <img src={getSizeImage(musicImgUrl, 133)} alt="" />
      </div>
    </MusicPlayBarWrapper>
  );
});
