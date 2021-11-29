import request from '@/services/requset'
export function getDjInfo(rid) {
    return request({
        isLoading:false,
        url:'/dj/program',
        params:{
            rid
        }
    })
}
export function getDjAudioUrl(id) {
    return request({
        isLoading:false,
        url:"/song/url",
        params:{
            id
        }
    })
}