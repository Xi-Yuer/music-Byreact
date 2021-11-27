import React, { memo, useEffect, useState } from 'react';

import { StyleWrapper } from './style';

import { getTopPlayListData, getCategoryInfo } from './getData';

import Top from './c-components/top';
import Item from './c-components/content';

export default memo(function Song() {
  const [cat, setCat] = useState();
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(1);

  const [Data, setData] = useState();
  const [Category, setCategory] = useState();
  const [sub, setSub] = useState();

  const pageCount = num => {
    setLimit(num);
  };
  const offsetPage = num => {
    setOffset(num);
  };

  useEffect(() => {
    getTopPlayListData(cat, limit, offset).then(res => {
      setData(res);
    });
  }, [cat, limit, offset]);

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
    setCat(cat);
  };
  return (
    Data !== undefined && (
      <StyleWrapper className='wrap-v2'>
        <Top Category={Category} sub={sub} changeCat={changeCat} />
        <div className='content'>
          <Item item={Data} pageCounter={pageCount} offset={offsetPage} />
        </div>
      </StyleWrapper>
    )
  );
});
