import React, { memo } from 'react';
import { StyleWrapper, Content } from './style';
export default memo(function Mine() {
  return (
    <StyleWrapper className='wrap-v2'>
      <Content>
        <div className='mine'>
          <img
            src='https://s2.music.126.net/style/web2/img/mymusic.png?30666809519e9fdfdce43ec513c92050'
            alt=''
          />
        </div>
      </Content>
    </StyleWrapper>
  );
});
