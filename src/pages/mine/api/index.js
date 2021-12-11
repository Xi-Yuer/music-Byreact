import request from '@/services/requset';

export function getUserInfo(uid) {
  return request({
    url: '/user/playlist',
    params: {
      uid
    },
  });
}
export function getUserRecommendSongMenuList() {
  return request({
    url:'/personalized?limit=10'
  })
}

export function login(phone,password) {
  return request({
      url:'/login/cellphone',
      methods:'POST',
      params:{
          phone,
          password,
          timestamp:Date.parse(new Date()) / 1000
      }
  })
}
