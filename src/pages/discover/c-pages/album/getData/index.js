import request from '@/services/requset';

export function getAlbumInfo() {
  return request({
    url: '/top/album',
    params: {
      limit: 14,
    },
  });
}

export function getAlbumMoreInfo(area) {
    return request({
        url:'/album/new',
        params:{
            area
        }
    })
}
