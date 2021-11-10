import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";

import { getSizeImage, formatDate, getPlayUrl } from "@/utils/format-utils";

import { SendMusicRquest } from "@/services/music-data";

import { Slider } from "antd";

export default memo(function Player() {
  const dispatch = useDispatch();
  const audioRef = useRef();

  // 当前时间
  const [currentTime, setCurrentTime] = useState(0);
  // 进度
  const [progress, setProgress] = useState(0);
  // 是否在控制进度
  const [isChanging, setIsChanging] = useState(false);
  // 是否在播放
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSongInfo = useSelector(state => state.CurrentMusicInfo,shallowEqual);

  useEffect( () => { dispatch(SendMusicRquest(33894312)) }, [dispatch] );

  // 刚开始currentSongInfo为空
  useEffect(() => { currentSongInfo.id && (audioRef.current.src = getPlayUrl(currentSongInfo.id))}, [currentSongInfo]);
  
  const duration = currentSongInfo.dt || 0;

  // 播放/暂停音乐
  const palyMusic = useCallback(() => {isPlaying ? audioRef.current.pause() : audioRef.current.play();setIsPlaying(!isPlaying)}, [isPlaying]);

  // 拖拽中.....
  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true); //正在修改进度

      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime); //设置时间

      setProgress(value);
    },
    [duration]
  );

  // 拖拽完毕。。。
  const sliderAfterChange = useCallback(
    (value) => {
      setIsChanging(false); //修改进度完毕

      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;

      setCurrentTime(currentTime * 1000);
      setProgress(value); //设置进度

      // 拖拽进度条也能开启播放歌曲
      if (!isPlaying) { palyMusic() }
      
    },
    [duration, isPlaying, palyMusic]
  );

  return (
    JSON.stringify(currentSongInfo) === "{}" || (
      <PlaybarWrapper className="sprite_player ">
        <div className="content wrap-v2">
          <Control isPlaying={isPlaying}>
            <button className="sprite_player prev"></button>
            <button
              className="sprite_player play"
              onClick={(e) => palyMusic()}
            ></button>
            <button className="sprite_player next"></button>
          </Control>
          <PlayInfo>
            <div className="image">
              <NavLink to='/discover/musicInfoPage'>
                <img src={getSizeImage(currentSongInfo.al.picUrl, 35)} alt="" />
              </NavLink>
            </div>

            <div className="info">
              <div className="song">
                <span className="song-name">{currentSongInfo.name}</span>
                <span className="singer-name">
                  {currentSongInfo.ar[0].name}
                </span>
              </div>
              <div className="progress">
                <Slider
                  value={progress}
                  tooltipVisible={false}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                />
                <div className="time">
                  <span className="now-time">
                    {formatDate(currentTime, "mm:ss")}
                  </span>
                  <span className="divider">/</span>
                  <span className="duration">
                    {formatDate(duration, "mm:ss")}
                  </span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator>
            <div className="left">
              <button className="sprite_player btn favor"></button>
              <button className="sprite_player btn share"></button>
            </div>
            <div className="right sprite_player">
              <button className="sprite_player btn volume"></button>
              <button className="sprite_player btn loop"></button>
              <button className="sprite_player btn playlist"></button>
            </div>
          </Operator>
        </div>
        <audio
          ref={audioRef}
          autoPlay
          onTimeUpdate={(e) => {
            if (!isChanging) {
              // 当执行拖拽的时候不能设置时间和进度
              setCurrentTime(e.target.currentTime * 1000);
              setProgress((currentTime / duration) * 100);
            }
          }}
          hidden
        />
      </PlaybarWrapper>
    )
  );
});
