import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { message, Slider, Drawer } from 'antd';
import SongMenuList from '@/components/song-menu-list';

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';

import { getSizeImage, formatDate, getPlayUrl } from '@/utils/format-utils';

import { CHANGESEQUENCE, CHANGECURRENTLYRICINDEX } from '@/store/config';
import createAction from '@/store/create-action';
import { changeCurrentSong } from './change-music';
import { CalculatorFilled } from '@ant-design/icons';

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

  const {
    currentSongInfo = {},
    sequence,
    playList,
    lyricList,
    currentLyricIndex,
  } = useSelector(
    state => ({
      currentSongInfo: state.CurrentMusicInfo,
      sequence: state.sequence,
      playList: state.playList.length,
      lyricList: state.lyric,
      currentLyricIndex: state.currentLyricIndex,
    }),
    shallowEqual
  );

  // 刚开始currentSongInfo为空(当redux中的歌曲信息变化时，该代码会自动执行)
  useEffect(() => {
    currentSongInfo.id &&
      (audioRef.current.src = getPlayUrl(currentSongInfo.id));
  }, [currentSongInfo]);

  const duration = currentSongInfo.dt || currentSongInfo.duration || 0;

  // 播放/暂停音乐
  const palyMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  //歌曲播放完毕
  const handleMusicEnded = () => {
    if (sequence === 2) {
      //单曲循环(歌曲播放完毕之后,将歌曲播放进度设置为0,再次播放,真巧妙！😀)
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSong(1));
    }
  };

  // 拖拽中.....
  const sliderChange = useCallback(
    value => {
      setIsChanging(true); //正在修改进度

      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime); //设置时间

      setProgress(value);
    },
    [duration]
  );

  // 拖拽完毕。。。
  const sliderAfterChange = useCallback(
    value => {
      setIsChanging(false); //修改进度完毕

      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;

      setCurrentTime(currentTime * 1000);
      setProgress(value); //设置进度

      // 拖拽进度条也能开启播放歌曲
      if (!isPlaying) {
        palyMusic();
      }
    },
    [duration, isPlaying, palyMusic]
  );

  const ChangeSequence = () => {
    let currentsequence = sequence + 1;
    if (currentsequence > 2) {
      currentsequence = 0;
    }
    dispatch(createAction(CHANGESEQUENCE, currentsequence));
  };

  // 上一曲/下一曲
  const changeMusic = tag => {
    dispatch(changeCurrentSong(tag));
  };

  // 展示
  const [showSongMenuList, setShowSongMenuList] = useState(false);
  const showSongMenuListBtnClick = () => {
    setShowSongMenuList(true);
  };
  const onClose = () => {
    setShowSongMenuList(false);
  };
  return (
    JSON.stringify(currentSongInfo) !== '{}' && (
      <PlaybarWrapper className='sprite_player '>
        <div className='content wrap-v2'>
          <Control isPlaying={isPlaying}>
            <button
              className='sprite_player prev'
              onClick={e => changeMusic(-1)}
            ></button>
            <button
              className='sprite_player play'
              onClick={e => palyMusic()}
            ></button>
            <button
              className='sprite_player next'
              onClick={e => changeMusic(1)}
            ></button>
          </Control>
          <PlayInfo>
            <div className='image'>
              <NavLink to='/discover/musicInfoPage'>
                <img
                  src={getSizeImage(
                    currentSongInfo.al
                      ? currentSongInfo.al.picUrl
                      : currentSongInfo.album.artist.img1v1Url,
                    35
                  )}
                  alt=''
                />
              </NavLink>
            </div>

            <div className='info'>
              <div className='song'>
                <span className='song-name'>{currentSongInfo.name}</span>
                <span className='singer-name'>
                  {currentSongInfo.ar
                    ? currentSongInfo.ar[0].name
                    : currentSongInfo.artists[0].name}
                </span>
              </div>
              <div className='progress'>
                <Slider
                  value={progress}
                  tooltipVisible={false}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                />
                <div className='time'>
                  <span className='now-time'>
                    {formatDate(currentTime, 'mm:ss')}
                  </span>
                  <span className='divider'>/</span>
                  <span className='duration'>
                    {formatDate(duration, 'mm:ss')}
                  </span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator sequence={sequence}>
            <div className='left'>
              <button className='sprite_player btn favor'></button>
              <button className='sprite_player btn share'></button>
            </div>
            <div className='right sprite_player'>
              <button className='sprite_player btn volume'></button>
              <button
                className='sprite_player btn loop'
                onClick={e => ChangeSequence()}
              ></button>
              <Drawer
                title={`播放列表(${playList})首`}
                placement='right'
                onClose={onClose}
                visible={showSongMenuList}
                width='400'
                height={CalculatorFilled}
              >
                
               <SongMenuList />
              </Drawer>
              <button
                className='sprite_player btn playlist'
                onClick={showSongMenuListBtnClick}
              >
                {playList}
              </button>
            </div>
          </Operator>
        </div>
        <audio
          ref={audioRef}
          autoPlay
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => handleMusicEnded()}
          onTimeUpdate={e => {
            const currentTime = e.target.currentTime;
            if (!isChanging) {
              // 当执行拖拽的时候不能设置时间和进度
              setCurrentTime(currentTime * 1000);
              setProgress(((currentTime * 1000) / duration) * 100);
            }
            // 获取当前歌词
            let curruentLyricIndex = 0;
            for (let i = 0; i < lyricList.length; i++) {
              let lyricItem = lyricList[i];
              if (currentTime * 1000 < lyricItem.time) {
                curruentLyricIndex = i;
                break;
              }
            }
            let currentIndex = curruentLyricIndex - 1;
            if (currentLyricIndex !== currentIndex) {
              dispatch(createAction(CHANGECURRENTLYRICINDEX, currentIndex));
              const content =
                lyricList[currentIndex] && lyricList[currentIndex].content;
              message.open({
                key: 'lyric',
                content: content,
                duration: 0,
                className: 'lyric-class',
              });
            }
          }}
          hidden
        />
      </PlaybarWrapper>
    )
  );
});
