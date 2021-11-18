import request from '@/services/requset';
export function getVideoDetail(mvid) {
  return request({
    url: '/mv/detail/info',
    params: {
      mvid,
    },
  });
}
export function getVideoInfo(mvid) {
  return request({
    url: '/mv/detail',
    params: {
        mvid,
    },
  });
}
export function getVideoUrl(id) {
  return request({
    url: '/mv/url',
    params: {
      id,
    },
  });
}

export function getVideoComments(id) {
  return request({
    url: '/comment/mv',
    params: {
      id,
    },
  });
}

export function getSimiMv(mvid) {
  return request({
    url: '/simi/mv',
    params: {
      mvid,
    },
  });
}
