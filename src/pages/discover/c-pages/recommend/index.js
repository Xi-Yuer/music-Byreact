import React, { memo, useEffect } from "react";
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import store from "@/store";

import { getBanners,getRecommends, getNewAlbum } from "./getData/index";


import TopBanner from "./c-components/top-banner";
import HotRecommend from './c-components/hot-recommend'
import Album from "./c-components/new-album";
import Rangking from './c-components/ranking'

export default memo(function Recommend() {
  useEffect(() => {
    store.dispatch(getBanners);
    store.dispatch(getRecommends);
    store.dispatch(getNewAlbum);
    return ()=>{
    }
  }, []);
  return (
    <RecommendWraper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend/>
          <Album/>
          <Rangking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  );
});
