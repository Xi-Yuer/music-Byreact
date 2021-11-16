import React, { memo, useEffect, useState } from 'react';

import { StyleWrapper } from './style';

import { getTopPlayListData, getCategoryInfo } from './getData';

import Top from './c-components/top';
import Item from './c-components/content';

export default memo(function Song() {
  const [cat,setCat] = useState();
  const [Data, setData] = useState();
  const [Category, setCategory] = useState();
  const [sub, setSub] = useState();

  useEffect(() => {
    getTopPlayListData(cat).then(res => {
      setData(res);
    });
  }, [cat]);

  useEffect(() => {
    getCategoryInfo().then(res => {
      let arr = [];
      for (let prop in res.categories) {
        arr.push({
          index: res.categories[prop],
        });
      }
      setCategory(arr);
      setSub(res.sub);
    });
  }, []);
  const changeCat = cat => {
    setCat(cat)
  }
  return (
    Data !== undefined && (
      <StyleWrapper className='wrap-v2'>
        <Top Category={Category} sub={sub} changeCat={changeCat}/>
        <div className='content'>
          <Item item={Data.playlists} />
        </div>
      </StyleWrapper>
    )
  );
});
