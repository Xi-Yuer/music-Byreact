import request from '@/services/requset';
export function getAlbumInfo(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    },
  });
}

export function getItemInfo(ids) {
  return request({
    url: 'song/detail',
    isLoading: false,
    params: {
      ids,
    },
  });
}

export function getUseraccount() {
  return request({
    url: '/user/subcount'
  });
}
