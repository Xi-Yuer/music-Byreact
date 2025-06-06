import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import { CHANGEPLAYLIST } from "@/store/config";
import createAction from "@/store/create-action";

import { getSizeImage } from '@/utils/format-utils';
import { SendMusicRquest } from "@/services/music-data";

import { TopRankingWrapper } from './style';

export default memo(function TopRanking(props) {
  // props and state
  const { info = {}, target = '' } = props;
  const { tracks = [] } = info ? info : {};

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(SendMusicRquest(item.id));
    const newPlayList = [...tracks]
    newPlayList.shift()
    dispatch(createAction(CHANGEPLAYLIST, newPlayList))
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/">{info.name}</a>
          <div>
            <button className="btn play sprite_02" onClick={e => playMusic(tracks[0])}></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play"
                      onClick={e => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <Link to={{ pathname: target, state: { info: info } }}>查看全部 &gt;</Link>
      </div>
    </TopRankingWrapper>
  )
})