import request from "../requset";

import { MUSICINFO,CURRENTSONGINDEX,CHANGEPLAYLIST } from "@/store/config";
import createAction from "@/store/create-action";

export function getMusicInfo(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids: ids,
    },
  });
}

export const SendMusicRquest = (ids) => {
  // 该函数有两个参数：第一个是派发，第二个是拿到store中的对象
  return (dispatch,getState) => {

    // 根据歌曲id查找playList中是否已经存在该歌曲
    const playList = getState().playList
    // 返回歌曲的index位置若没有找到那么该index会返回-1
    const songIndex = playList.findIndex(song =>song.id === ids)
    // 判断是否找到歌曲
    if(songIndex !==-1){
      // 找到歌曲
      dispatch(createAction(CURRENTSONGINDEX,songIndex)) //改变index
      const song = playList[songIndex]
      dispatch(createAction(MUSICINFO,song)) //改变当前歌曲
    }else{
      // 没有找到歌曲
      // 请求歌曲数据
      getMusicInfo(ids).then((res) => {
        // 是否存在该歌曲
        const song = res.songs &&  res.songs[0]
        // if(song) return
        // 存在该歌曲
        // 将歌曲添加到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)
        // 更新redux中的歌曲列表
        dispatch(createAction(CHANGEPLAYLIST,newPlayList))
        // 更新当前播放歌曲的索引值
        dispatch(createAction(CURRENTSONGINDEX,newPlayList.length-1))
        // 请求歌曲数据
        dispatch(createAction(MUSICINFO, song));
      });
    }
  };
};
