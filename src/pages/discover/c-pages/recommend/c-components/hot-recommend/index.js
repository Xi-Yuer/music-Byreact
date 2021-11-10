import React, { memo } from "react";
import { useSelector } from 'react-redux'

import { HotRecommendWrapper } from "./style";
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import SongCover from '@/components/songs-cover'


export default memo(function HotRecommend() {
  const recommends = useSelector(state => state.recommends)
  return (
    <HotRecommendWrapper>
        <ThemeHeaderRCM title='热门推荐' keyword={['华语','流行','民谣','摇滚','电子']}/>
        <div className='recommend-list'>
          {
            recommends.map((item,index)=>{
              return <SongCover info={item} key={item.id}/>
            })
          }
        </div>
    </HotRecommendWrapper>
  )

});
