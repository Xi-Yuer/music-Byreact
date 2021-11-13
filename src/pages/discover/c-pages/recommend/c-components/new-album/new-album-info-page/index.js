import React, { memo, useState, useEffect } from "react";
import { useDispatch } from 'react-redux'

import { CHANGEPLAYLIST } from '@/store/config'
import createAction from '@/store/create-action'

import { getNewAlbumInfo,getNewAlbumComments } from "./getData";
import { getSizeImage, formatDate } from "@/utils/format-utils";
import { SendMusicRquest } from '@/services/music-data'

import MusicCommen from './comments'


import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

export default memo(function NewAlbumInfoPage(props) {

  const dispatch = useDispatch()
  const id = props.location.state.id;

  const [{ album, songs }, setAlbumInfo] = useState({});
  const [describtionLine, setDescribtionLine] = useState(true);
  const [comments, setComments] = useState([])

  const moreBtnClick = () => {setDescribtionLine(!describtionLine)}
  const itemClick = (id) => {dispatch(SendMusicRquest(id));dispatch(createAction(CHANGEPLAYLIST,songs))}

  useEffect(() => {
    getNewAlbumInfo(id).then((res) => {
      setAlbumInfo(res);
      getNewAlbumComments(id).then(res=>{
        setComments([...res.comments,...res.hotComments])
      })
    });
  }, [id]);
  
  return (
    album !== undefined &&
    songs !== undefined && (
      <RecommendWraper className="wrap-v2">
        <Content>
          <RecommendLeft describtionLine={describtionLine}>
            <div className="topInfo">
              <div className="albumInfo">
                <div>
                  <img src={getSizeImage(album.picUrl, 177)} alt="" />
                </div>
                <div className="albumdescribtion">
                  <div className="albumName">专辑：{album.name}</div>
                  <div className="greyFontColor">
                    歌手：{" "}
                    <span className="songer"> {album.artists[0].name}</span>
                  </div>
                  <div className="greyFontColor">
                    发行时间： {formatDate(album.publishTime, "yyyy-MM-dd")}
                  </div>
                  <div className="greyFontColor">
                    发行公司： {album.company}
                  </div>
                </div>
              </div>
              <div className="albumeIntroduce">
                <b>专辑介绍：</b>
                <div className="description text-nowrap">
                  <p dangerouslySetInnerHTML={{ __html: album.description }} />
                </div>
                <span
                  className="more"
                  onClick={(e) => {
                    moreBtnClick();
                  }}
                >
                  {describtionLine ? "展开↓" : "收起↑"}
                </span>
              </div>
              <div className="albumSongs">
                <div className="title">
                  <h2>歌曲列表</h2>
                  <span>
                    包含 <b>{album.size}</b> 首歌
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
                        <span className="span5 text-nowrap">
                          {item.al.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <MusicCommen hotComments={comments}/>
            </div>
          </RecommendLeft>
          <RecommendRight>
            <h2>其他</h2>
          </RecommendRight>
        </Content>
      </RecommendWraper>
    )
  );
});
