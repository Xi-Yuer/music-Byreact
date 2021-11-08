import {
  GETBANNERS,
  GETRECOMMENDS,
  GETNEWALBUM,
  HOTSONGLIST,
  ORIGINALCREATIONLIST,
  SOARINGLIST,
  HORARINGLIST
} from "./config";
import init from "./init";
function reducer(state = init, action) {
  const { type, data } = action;
  switch (type) {
    case GETBANNERS:
      return { ...state, banners: data };
    case GETRECOMMENDS:
      return { ...state, recommends: data };
    case GETNEWALBUM:
      return { ...state, newalbum: data };
    case HOTSONGLIST:
      return { ...state, HotSongList: data };
    case ORIGINALCREATIONLIST:
      return { ...state, OriginalCreationList: data };
    case SOARINGLIST:
      return { ...state, SoaringList: data };
    case HORARINGLIST:
      return { ...state, HotArtists: data };
    default:
      return { ...state };
  }
}
export default reducer;
