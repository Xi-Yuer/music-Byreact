import React, { memo } from 'react'
import { getScanKey } from './api'
export default memo(function ScanLogin(props) {
    getScanKey().then(res=>{
        console.log(res);
    })
    // const { setIsModalVisible } = props
    return (
        <div>
            <h2>二维码登录</h2>
        </div>
    )
})
