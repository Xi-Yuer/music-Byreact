import React, { memo } from "react";
import { useSelector } from "react-redux";

import { getSizeImage, formatDate } from "@/utils/format-utils";

import { MusicCommen } from "./style";

export default memo(function MusicPlayBar() {
  const { hotComments, comments } = useSelector(
    (state) => state.currentMusicCommon
  );
  return (
    <MusicCommen>
      <div className="line">
        <b>精彩评论</b>
      </div>
      {[...hotComments, ...comments].map((item) => {
        return (
          <div key={item.commentId} className="content1">
            <div className="userImg">
              <img src={getSizeImage(item.user.avatarUrl, 50)} alt="" />
            </div>
            <div className="userCommen">
              <div>
                <span className="userName">{item.user.nickname}:</span>
                <span>{item.content}</span>
              </div>
              <div className="commenInfo">
                <div className="time">
                  {formatDate(item.time, "yyyy年MM月dd日hh:ss")}
                </div>
                <div>
                  <span className="like iconfont iconzan">
                    ({item.likedCount})
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </MusicCommen>
  );
});
