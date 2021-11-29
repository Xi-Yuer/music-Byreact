import React, { memo, useState, useEffect } from 'react';

import { RankingWrapper, RankingLeft, RankingRight } from './style';

import { HotSongList, getSongDetail } from './getData';

import LeftMenu from './c-components/left-menu';
import RightDetail from './c-components/right-detail';

export default memo(function Rangking(props) {

  const initId = props.location.state?.info.id || 19723756

  const [menuList = [], setMenuList] = useState();
  const [menuDetail, setMenuDetail] = useState();
  const [id=initId, setId] = useState();

  useEffect(() => {
    HotSongList().then(res => {
      setMenuList(res.list);
    });
  }, []);

  useEffect(() => {
    getSongDetail(id).then(res => {
      setMenuDetail(res);
    });
  }, [id]);

  return (
    <RankingWrapper className='wrap-v2'>
      <RankingLeft>
        <LeftMenu menuList={menuList} setId={setId} />
      </RankingLeft>
      <RankingRight>
        <RightDetail menuDetail={menuDetail} />
      </RankingRight>
    </RankingWrapper>
  );
});
