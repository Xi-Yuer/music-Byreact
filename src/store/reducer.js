import { GETBANNERS, GETRECOMMENDS, GETNEWALBUM } from "./config";
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
    default:
      return { ...state };
  }
}
export default reducer;
