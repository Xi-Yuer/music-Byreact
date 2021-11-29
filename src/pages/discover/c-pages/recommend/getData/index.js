import creatAction from "@/store/create-action";
import {
  GETBANNERS,
  GETRECOMMENDS,
  GETNEWALBUM,
  HOTSONGLIST,
  ORIGINALCREATIONLIST,
  SOARINGLIST,
  HORARINGLIST,
} from "@/store/config";
import request from "@/services/requset";
import createAction from "@/store/create-action";

// 获取轮播图
export const getBanner = () => {
  return (dispatch) => {
    request({
      url: "banner",
      isLoading:true,
    }).then((res) => {
      dispatch(creatAction(GETBANNERS, res.banners));
    });
  };
};

// 热门推荐
export const getRecommends = () => {
  return (dispatch) => {
    request({
      isLoading:true,
      url: "/personalized?limit=8",
    }).then((res) => {
      dispatch(creatAction(GETRECOMMENDS, res.result));
    });
  };
};

// 新碟上架
export const getNewAlbum = () => {
  return (dispatch) => {
    request({
      isLoading:true,
      url: "/top/album?offset=0&limit=10",
    }).then((res) => {
      dispatch(createAction(GETNEWALBUM, res.albums));
    });
  };
};

// 热歌榜
export const HotSongList = () => {
  return (dispatch) => {
    request({
      isLoading:true,
      url: "/top/list",
      params: {
        idx: "1",
      },
    }).then((res) => {
      dispatch(createAction(HOTSONGLIST, res.playlist));
    });
  };
};
// 原创榜
export const OriginalCreationList = () => {
  return (dispatch) => {
    request({
      isLoading:true,
      url: "/top/list",
      params: {
        idx: "2",
      },
    }).then((res) => {
      dispatch(createAction(ORIGINALCREATIONLIST, res.playlist));
    });
  };
};
// 飙升榜
export const SoaringList = () => {
  return (dispatch) => {
    request({
      isLoading:true,
      url: "/top/list",
      params: {
        idx: "3",
      },
    }).then((res) => {
      dispatch(createAction(SOARINGLIST, res.playlist));
    });
  };
};

// 热门歌手
export const getHotAnchor = () => {
  return (dispatch) => {
    request({
      isLoading:true,
      url: "/top/artists",
      params: {
        offset: "0",
        limit: "8",
      },
    }).then((res) => {
      dispatch(createAction(HORARINGLIST, res.artists));
    });
  };
};
