import request from "@/services/requset";
// 排行榜
export function HotSongList() {
  return request({
    url: "/toplist",
  });
}

export function getSongDetail(id) {
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}