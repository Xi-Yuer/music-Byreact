import React, { memo } from 'react'

import{ getSizeImage } from '@/utils/format-utils'

import { StyleWrapper } from './style'
export default memo(function OtherAlbum(props) {
    const { moreAlbum, rightAlbumItemClick } = props
    const jumpToAlbumInfo = item => {
        rightAlbumItemClick(item.id)
    }
    return (
        <StyleWrapper>
              <div className="header">
                <b>更多专辑</b>
              </div>
              {
                moreAlbum.length!==0 && moreAlbum.map((item,index)=>{
                  return (
                    <div key={item.id} className='simiAlbumContent' onClick={e=>{
                      jumpToAlbumInfo(item)
                    }}>
                      <div>
                        <img src={getSizeImage(item.picUrl,50)} alt=""/>
                      </div>
                      <div className='simiAlbumRight'>
                        <div className='simiAlbumName text-nowrap'>{item.name}</div>
                        <div className='simiAlbumNickName text-nowrap'>by&nbsp;{item.artists[0].name}</div>
                      </div>
                    </div>
                  )
                })
              }
            </StyleWrapper>
    )
})
