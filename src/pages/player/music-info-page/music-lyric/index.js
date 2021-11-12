import React, { memo, useState} from 'react'
import { useSelector,shallowEqual } from 'react-redux'

import { MusicLyric } from './style'

export default memo(function MusicPlayBar() {
    const lyricArr = useSelector(state => state.lyric,shallowEqual)
    const [lyricShowLine, setLyricShowLine] = useState(10)
    const [isShowMore, setIsShowMore] = useState(false)
    const More = () => {
        setIsShowMore(!isShowMore)
        if(!isShowMore){
            setLyricShowLine(lyricArr.length)
        }else{
            setLyricShowLine(10)
        }
        
    }
    return (
        <MusicLyric>
            <ul>
            {
               lyricArr.slice(0,lyricShowLine).map((item,index)=>{
                   return <li key={item.time} className='lyricItem'>{item.content}</li>
               }) 
            }
            </ul>
           <div>
               <span className='more'onClick={e=>{More()}}>{!isShowMore?'展开↓':'收起↑'}</span>
           </div>
        </MusicLyric>
    )
})
