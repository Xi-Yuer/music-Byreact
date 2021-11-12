import React, { memo } from "react";
import {useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { HotRecommendWrapper } from "./style";
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import SongCover from '@/components/songs-cover'

import createAction from '@/store/create-action'
import { CHANGECURRENTALBUMID } from '@/store/config'

export default memo(function HotRecommend(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const recommends = useSelector(state => state.recommends)
  const jumpToAlbum = (item)=> {
    dispatch(createAction(CHANGECURRENTALBUMID,item.id))
    history.push({
      pathname:'/discover/albumInfo'
    })
  }
  return (
    <HotRecommendWrapper>
        <ThemeHeaderRCM title='热门推荐' keyword={['华语','流行','民谣','摇滚','电子']}/>
        <div className='recommend-list'>
          {
            recommends.map((item,index)=>{
              return <div key={item.id} onClick={ e =>{ jumpToAlbum(item) }}><SongCover info={item}/></div>
            })
          }
        </div>
    </HotRecommendWrapper>
  )

});
