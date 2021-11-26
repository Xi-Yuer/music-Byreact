import React, { memo } from "react";
import { MusicInfoWrapper } from "./style";
import { useSelector,shallowEqual } from "react-redux";
import { getCount } from "@/utils/format-utils";
export default memo(function MusicPlayBar() {
  const { CurrentMusicInfo, currentMusicCommon } = useSelector((state) => ({
    CurrentMusicInfo: state.CurrentMusicInfo,
    currentMusicCommon: state.currentMusicCommon,
  }),shallowEqual);
  return (
    CurrentMusicInfo!==undefined &&  <MusicInfoWrapper>
      <div className="content1">
        <div className="title">
          <em>{CurrentMusicInfo.name}</em>
        </div>
        <div className="singerName">
          <span className="font-grey">歌手:</span>
          <span className="font-blue">{CurrentMusicInfo.ar?CurrentMusicInfo.ar[0].name: CurrentMusicInfo.artists[0].name} </span>
        </div>
        <div className="musicalbum">
          <span className="font-grey">所属专辑: </span>
          <span className="font-blue">{CurrentMusicInfo.al?CurrentMusicInfo.al.name:CurrentMusicInfo.album.name}</span>
        </div>
        <div className="control">
          <span
            className="iconfont icon24gl-play"
            style={{ backgroundColor: "#3787d2", color: "#fff" }}
          >
            播放
          </span>
          <span>收藏</span>
          <span>分享</span>
          <span className="iconfont iconxiazai">下载</span>
          <span className="iconfont iconpinglun">
            ({getCount(currentMusicCommon.total)})
          </span>
        </div>
      </div>
    </MusicInfoWrapper>
  );
});
