import createAction from '@/store/create-action';
import { MUSICINFO, CURRENTSONGINDEX } from '@/store/config';
import { getRandom } from '@/utils/math-utill';
import { getLyricAction } from '@/services/music-data';
export const changeCurrentSong = tag => {
  return (dispatch, getState) => {
    const playList = getState().playList;
    const sequnce = getState().sequnce;
    let currentSongIndex = getState().currentSongIndex;
    if (playList.length) {
      switch (sequnce) {
        case 1: //随机播放
          let randomIndex = getRandom(playList.length);
          while (randomIndex === currentSongIndex) {
            randomIndex = getRandom(playList.length);
          }
          currentSongIndex = randomIndex;
          break;
        default:
          //顺序播放
          currentSongIndex += tag;
          if (currentSongIndex >= playList.length) currentSongIndex = 0;
          if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
      }
      const currentSong = playList[currentSongIndex];
      dispatch(createAction(MUSICINFO, currentSong));
      dispatch(createAction(CURRENTSONGINDEX, currentSongIndex));
      dispatch(getLyricAction(getState().CurrentMusicInfo.id));
    }
  };
};
