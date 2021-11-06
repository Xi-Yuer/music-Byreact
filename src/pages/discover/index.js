import React, { memo } from 'react'
import { DiscoverWrapper, TopMenu } from './style'
import { dicoverMenu } from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
export default memo(function Discover(props) {
    return (
        <DiscoverWrapper>
            <div className='top'>
                <TopMenu className='wrap-v1'>
                    {
                        dicoverMenu.map((item,index)=>{
                            return (
                                <div className='item' key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {
                renderRoutes(props.route.routes)
            }
        </DiscoverWrapper>
    )
})
