import React, { memo,useState } from "react";


import { HotRecommendWrapper } from "./style";
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import SongCover from '@/components/songs-cover'

import store from '@/store'


export default memo(function HotRecommend() {
  const [hotrecommend] = useState(store.getState().recommends)
  return (
    <HotRecommendWrapper>
        <ThemeHeaderRCM title='热门推荐' keyword={['华语','流行','民谣','摇滚','电子']}/>
        <div className='recommend-list'>
          {
            hotrecommend.map((item,index)=>{
              return <SongCover info={item} key={item.id}/>
            })
          }
        </div>
    </HotRecommendWrapper>
  )

});
