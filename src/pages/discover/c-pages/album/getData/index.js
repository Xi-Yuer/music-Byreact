import request from '@/services/requset';

export function getAlbumInfo(limit, offset) {
  return request({
    url: '/top/album',
    isLoading:true,
    params: {
      limit,
      type: 'hot',
      offset: offset * limit,
    },
  });
}

export function getAlbumMoreInfo(area,limit,offset) {
  return request({
    isLoading:true,
    url: '/top/album',
    params: {
      area,
      limit,
      offset:offset*limit
    },
  });
}
