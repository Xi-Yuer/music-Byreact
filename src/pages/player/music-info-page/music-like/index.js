import React, { memo } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { SendMusicRquest } from "@/services/music-data";
import { StyledWrapper } from './style'
export default memo(function LikeMusic() {
    const dispatch = useDispatch();
    const simiSongs = useSelector(state => state.simiSongs)
    const simiSongItemClick = (item) => {
        dispatch(SendMusicRquest(item.id));
    }
    return (
        <StyledWrapper>
            <div className='simiLikeLine'>相似歌曲</div>
            {
                simiSongs.songs.map((item,index)=>{
                    return (
                        <div className='wrap'>
                            <div className='musicInfo'>
                                <div className='name text-nowrap'>{item.name}</div>
                                <div className='artists text-nowrap'>{item.artists[0].name}</div>
                            </div>
                            <div className='control' onClick={e=>{simiSongItemClick(item)}}>
                                <i className='iconfont icon24gl-play'></i>
                            </div>
                        </div>
                    )
                })
            }
        </StyledWrapper>
    )
})
