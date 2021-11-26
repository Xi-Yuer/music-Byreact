import request from '@/services/requset'
export function getDjInfo(rid) {
    return request({
        url:'/dj/program',
        params:{
            rid
        }
    })
}
export function getDjAudioUrl(id) {
    return request({
        url:"/song/url",
        params:{
            id
        }
    })
}