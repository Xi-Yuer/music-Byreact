import React, { memo } from 'react'


import MusicPlayBar from './music-play-bar'
import MusicInfo from './music-info'
import MusicLyric from './music-lyric'
import MusicCommen from './music-common'
import MusicLike from './music-like'

import { PlayerWrapper,PlayerLeft,PlayerRight } from './style'
export default memo(function MusicIfoPage() {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <div className="music">
                    <MusicPlayBar/>
                    <div>
                    <MusicInfo/>
                    <MusicLyric/>
                    </div>
                    </div>
                    <MusicCommen/>
                </PlayerLeft>
                <PlayerRight>
                    <MusicLike/>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
