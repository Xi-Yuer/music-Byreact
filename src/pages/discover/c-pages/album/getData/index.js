import request from '@/services/requset';

export function getAlbumInfo(limit,offset) {
  return request({
    url: '/top/album',
    params: {
      limit,
      offset:offset*limit
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
