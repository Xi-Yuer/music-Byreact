import React, { memo, useState } from "react";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import TopRanking from "@/components/top-ranking";

import store from "@/store";

import { RankingWrapper } from "./style";
export default memo(function Ranking() {
  const [HotSongList] = useState(store.getState().HotSongList);
  const [OriginalCreationList] = useState(
    store.getState().OriginalCreationList
  );
  const [SoaringList] = useState(store.getState().SoaringList);
  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" />
      <div className='tops'>
        <TopRanking info={HotSongList} />
        <TopRanking info={OriginalCreationList} />
        <TopRanking info={SoaringList} />
      </div>
    </RankingWrapper>
  );
});
