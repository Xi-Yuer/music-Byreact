import React, { memo, useEffect } from "react";
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import store from "@/store";

import {
  getBanners,
  getRecommends,
  getNewAlbum,
  HotSongList,
  OriginalCreationList,
  SoaringList,
  getHotAnchor
} from "./getData/index";

import TopBanner from "./c-components/top-banner";
import HotRecommend from "./c-components/hot-recommend";
import Album from "./c-components/new-album";
import Rangking from "./c-components/ranking";
import UserLoging from './c-components/user-login'
import SettleSinger from './c-components/settle-singer'
import HotAnchor from './c-components/hot-anchor'

export default memo(function Recommend() {
  useEffect(() => {
    store.dispatch(getBanners);
    store.dispatch(getRecommends);
    store.dispatch(getNewAlbum);
    store.dispatch(HotSongList);
    store.dispatch(OriginalCreationList);
    store.dispatch(SoaringList);
    store.dispatch(getHotAnchor);
  }, []);
  return (
    <RecommendWraper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <Album />
          <Rangking />
        </RecommendLeft>
        <RecommendRight>
          <UserLoging/>
          <SettleSinger/>
          <HotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWraper>
  );
});
