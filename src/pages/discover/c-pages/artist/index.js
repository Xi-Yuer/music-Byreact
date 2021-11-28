import React, { memo, useEffect, useState } from 'react';

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

import NavComponent from './nav';
import ArtistsMenu from './artists-menu';

import { getArtists } from './getData';
export default memo(function Artist() {
  const [artists = [], setArtists] = useState();
  const [typeId = -1, setTypeId] = useState();
  const [areaId = -1, setAreaId] = useState();
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [typeName] = useState([
    { name: '全部', type: -1 },
    { name: '男歌手', type: 1 },
    { name: '女歌手', type: 2 },
    { name: '乐队', type: 3 },
  ]);
  const [area] = useState([
    { name: '全部', area: -1 },
    { name: '华语', area: 7 },
    { name: '欧美', area: 96 },
    { name: '日本', area: 8 },
    { name: '韩国', area: 16 },
    { name: '其他', area: 0 },
  ]);

  useEffect(() => {
    getArtists(typeId, areaId,limit,offset).then(res => {
      setArtists(res.artists);
    });
  }, [typeId, areaId,limit,offset]);

  const setTypeIdFn = type => {
    setTypeId(type);
  };

  const setAreaIdFn = area => {
    setAreaId(area);
  };

  return (
    <RecommendWraper className='wrap-v2'>
      <Content>
        <RecommendLeft>
          <NavComponent
            title={typeName}
            area={area}
            setTypeId={setTypeIdFn}
            setAreaId={setAreaIdFn}
          />
        </RecommendLeft>
        <RecommendRight>
          <ArtistsMenu 
                artists={artists} 
                setOffset={setOffset}
                setLimit={setLimit}
                />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  );
});
