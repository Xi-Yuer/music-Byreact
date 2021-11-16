import React, { memo } from 'react'

import { StyleWrapper } from './style'
export default memo(function Top() {
    return (
        <StyleWrapper>
            <span className='className'>全部</span>
            <span className='classControl'>全部分类</span>
        </StyleWrapper>
    )
})