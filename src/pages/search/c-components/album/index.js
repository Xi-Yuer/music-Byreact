import React, { memo } from 'react'
import { useHistory } from "react-router-dom";

import AlbumCover from '@/components/album-cover'

import { StyleWrapper,StyleTop } from './style'


export default memo(function Album(props) {
    const { album=[], searchKeywords,total } = props
    const history = useHistory()
    const JumpToAlbumInfoPage = (item)=>{
        history.push({
          pathname:'/discover/newAlibumInfoPage',
          state:item
        })
      }
    return (
        
        album.length!==0 && 
        <div>
            <StyleTop className='title'>
          <h2>搜索"<span className='searchKeywords'>{searchKeywords}</span>"</h2>
          <span>
            找到 <b>{total}</b> 首专辑
          </span>
        </StyleTop>
        <StyleWrapper>
            {
            album.map(item=>{
                return (
                   <div onClick = {e=>{JumpToAlbumInfoPage(item)}} key={item.id}><AlbumCover info={item}/></div>
                )
            })
        }
        </StyleWrapper>
        </div>
        
    )
})
