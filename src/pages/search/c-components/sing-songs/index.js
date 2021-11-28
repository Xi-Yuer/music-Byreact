import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { StyleWrapper } from "./style";

import { formatDate } from "@/utils/format-utils";
import { SendMusicRquest } from "@/services/music-data";

import { CHANGEPLAYLIST } from "@/store/config";
import createAction from "@/store/create-action";

export default memo(function SongList(props) {

  const { songs = [], searchKeywords, offset, limit, total } = props;
  const dispatch = useDispatch();

  const itemClick = (item,id) => {
    dispatch(SendMusicRquest(id));
    dispatch(createAction(CHANGEPLAYLIST, songs));
  };
  return (
    songs.length !== 0 && (
      <StyleWrapper>
        <div className="albumSongs">
          <div className="title">
            <h2>搜索"<span className='searchKeywords'>{searchKeywords}</span>"</h2>
            <span>
              找到 <b>{total}</b> 首单曲
            </span>
          </div>
          <div>
            <div className="header">
              <span className="span1"></span>
              <span className="span2">歌曲标题</span>
              <span className="span3">时长</span>
              <span className="span4">歌手</span>
              <span className="span5">专辑</span>
            </div>
            {songs.map((item, index) => {
              return (
                <div className="header musicList" key={item.id}>
                  <span className="span1 text-nowrap">{index + 1 + offset * limit-limit}</span>
                  <span className="span2 text-nowrap">
                    <i
                      className="iconfont icon24gl-play"
                      onClick={(e) => {
                        itemClick(item,item.id);
                      }}
                    >
                      {" "}
                    </i>
                    {item.name}
                  </span>
                  <span className="span3 text-nowrap">
                    {formatDate(item.duration, "mm:ss")}
                  </span>
                  <span className="span4 text-nowrap">{item.artists[0].name}</span>
                  <span className="span5 text-nowrap">{item.album.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </StyleWrapper>
    )
  );
});
