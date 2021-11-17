import React, { memo } from 'react';
import { LoadingOutlined, SmileTwoTone } from '@ant-design/icons';
export default memo(function Lazy() {
  return (
    <div
      style={{
        width: '100%',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoadingOutlined/>
      <p> 懒得写了</p>
      <SmileTwoTone twoToneColor="#eb2f96"/>
    </div>
  );
});
