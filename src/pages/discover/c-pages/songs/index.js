import React, { memo, useEffect, useState } from 'react';

import { StyleWrapper } from './style';

import { getTopPlayListData } from './getData';

import Top from './c-components/top';
import Item from './c-components/content';

export default memo(function Song() {
  const [cat = '华语'] = useState();
  const [Data, setData] = useState();
  useEffect(() => {
    getTopPlayListData(cat).then(res => {
      setData(res);
    });
  }, [cat]);
  return (
    Data !== undefined && (
      <StyleWrapper className='wrap-v2'>
          <Top />
        <div className='content'>
          <Item item={Data.playlists} />
        </div>
      </StyleWrapper>
    )
  );
});
