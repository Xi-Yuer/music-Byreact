import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";
import { getAlbumInfo } from "./getData";
import { getSizeImage, formatDate } from "@/utils/format-utils";
import { SendMusicRquest } from "@/services/music-data";
export default memo(function AlbumInfo() {
  const currentAlbumId = useSelector((state) => state.currentAlbumId);
  const [{ playlist, privileges = [] }, setAlbumInfo] = useState(2087916692);
  const dispatch = useDispatch();
  useEffect(() => {
    getAlbumInfo(currentAlbumId).then((res) => {
      setAlbumInfo(res);
    });
  }, [currentAlbumId]);
  const itemClick = (id) => {
    dispatch(SendMusicRquest(id));
  };
  return (
    privileges.length === 0 || (
      <PlayerWrapper>
        <div className="content wrap-v2">
          <PlayerLeft>
            <div className="albumInfo">
              <div className="albumInfoImg">
                <img src={getSizeImage(playlist.coverImgUrl, 208)} alt="" />
              </div>
              <div className="albumInfoRight">
                <div>
                  <p className="albuName">{playlist.name}</p>
                </div>
                <div className="artarInfo">
                  <img
                    src={getSizeImage(playlist.creator.avatarUrl, 35)}
                    alt=""
                  />
                  <span className="nickName">{playlist.creator.nickname}</span>
                  <span className="createTime">
                    {formatDate(playlist.updateTime, "yyyy-MM-dd")}&nbsp;创建
                   </span>
                </div>
                <div>
                  标签：
                  {playlist.tags.map((item) => {
                    return (
                      <span className="tags" key={item}>
                        {item}
                      </span>
                    );
                  })}
                </div>
                <div className="description">介绍：{playlist.description}</div>
              </div>
            </div>
            <div className="albumSongs">
              <div className="title">
                <h2>歌曲列表</h2>
                <span>
                  播放<b>{playlist.playCount}</b> 次
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
                {playlist.tracks.map((item, index) => {
                  return (
                    <div className="header musicList" key={item.dt}>
                      <span className="span1 text-nowrap">{index + 1}</span>
                      <span className="span2 text-nowrap">
                        <i
                          className="iconfont icon24gl-play"
                          onClick={(e) => {
                            itemClick(item.id);
                          }}
                        >
                          {" "}
                        </i>
                        {item.name}
                      </span>
                      <span className="span3 text-nowrap">
                        {formatDate(item.dt, "mm:ss")}
                      </span>
                      <span className="span4 text-nowrap">
                        {item.ar[0].name}
                      </span>
                      <span className="span5 text-nowrap">{item.al.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </PlayerLeft>
          <PlayerRight>
            <h2>其他信息</h2>
          </PlayerRight>
        </div>
      </PlayerWrapper>
    )
  );
});
