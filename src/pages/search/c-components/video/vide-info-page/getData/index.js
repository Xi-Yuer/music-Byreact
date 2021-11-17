import request from '@/services/requset'
export function getVideoDetail(vid) {
    return request({
        url:'/video/detail/info',
        params:{
            vid
        }
    })
}
export function getVideoUrl(id) {
    return request({
        url:'/video/url',
        params:{
            id
        }
    })
}