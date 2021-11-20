import request from '@/services/requset';

// mv
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

export function getOridinaryVideoComments(id) {
  return request({
    url: '/comment/video',
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
export function getSimiVideo(id) {
  return request({
    url: '/related/allvideo',
    params: {
      id,
    },
  });
}

// 视频
export function getVideInfo(id) {
  return request({
    url:'/video/detail',
    params:{
      id
    }
  })
}

export function getOrdinary(vid) {
  return request({
    url:'/video/detail/info',
    params:{
      vid
    }
  })
}

export function getRrdinaryUrl(id) {
  return request({
    url:'/video/url',
    params:{
      id
    }
  })
}