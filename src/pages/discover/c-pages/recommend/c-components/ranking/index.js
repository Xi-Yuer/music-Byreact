import React, { memo } from "react";
import { useSelector } from 'react-redux'
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import TopRanking from "@/components/top-ranking";


import { RankingWrapper } from "./style";
export default memo(function Ranking() {
  const HotSongList = useSelector(state => state.HotSongList)
  const OriginalCreationList = useSelector(state => state.OriginalCreationList)
  const SoaringList = useSelector(state => state.SoaringList)
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
