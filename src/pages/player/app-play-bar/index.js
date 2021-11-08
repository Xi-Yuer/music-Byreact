import React, { memo } from 'react'

import { PlaybarWrapper,Control,PlayInfo,Operator } from './style'

import { Slider } from 'antd';

export default memo(function Player() {
    return (
        <PlaybarWrapper className='sprite_player '>
            <div className='content wrap-v2'>
                <Control>
                    <button className='sprite_player prev'></button>
                    <button className='sprite_player play'></button>
                    <button className='sprite_player next'></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <a href="#/">
                            <img src="https://p3.music.126.net/KeXWaX4RCCgz5XfnXPdCPQ==/109951165226097467.jpg?param=34y34" alt=""/>
                        </a>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <span className='song-name'>红豆</span>
                            <span className='singer-name'>要不要买菜</span>
                        </div>
                        <div className='progress'>
                        <Slider defaultValue={30}/>
                        <div className='time'>
                            <span className='now-time'>02:30</span>
                            <span className='divider'>/</span>
                            <span className='duration'>04:29</span>
                        </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
        </PlaybarWrapper>
    )
})
