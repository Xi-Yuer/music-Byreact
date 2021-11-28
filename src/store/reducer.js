import {
  GETBANNERS,
  GETRECOMMENDS,
  GETNEWALBUM,
  HOTSONGLIST,
  ORIGINALCREATIONLIST,
  SOARINGLIST,
  HORARINGLIST,
  MUSICINFO,
  CHANGEPLAYLIST,
  CURRENTSONGINDEX,
  CHANGESEQUENCE,
  CHANGELYRIC,
  CHANGECURRENTLYRICINDEX,
  CHANGECURRENTMUSICCOMMON,
  CHANGECURRESIMISONGS,
  CHANGECURRENTALBUMID,
} from './config';
import init from './init';
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
    case MUSICINFO:
      return { ...state, CurrentMusicInfo: data };
    case CHANGEPLAYLIST:
      return { ...state, playList: data };
    case CURRENTSONGINDEX:
      return { ...state, currentSongIndex: data };
    case CHANGESEQUENCE:
      return { ...state, sequence: data };
    case CHANGELYRIC:
      return { ...state, lyric: data };
    case CHANGECURRENTLYRICINDEX:
      return { ...state, currentLyricIndex: data };
    case CHANGECURRENTMUSICCOMMON:
      return { ...state, currentMusicCommon: data };
    case CHANGECURRESIMISONGS:
      return { ...state, simiSongs: data };
    case CHANGECURRENTALBUMID:
      return { ...state, currentAlbumId: data };
    default:
      return { ...state };
  }
}
export default reducer;
