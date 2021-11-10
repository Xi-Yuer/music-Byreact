import React, { memo } from 'react'


import { PlayerWrapper,PlayerLeft,PlayerRight } from './style'
export default memo(function MusicIfoPage() {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <h2>info</h2>
                    <h2>content</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>songslist</h2>
                    <h2>simisongs</h2>
                    <h2>domload</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
