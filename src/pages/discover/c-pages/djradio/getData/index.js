import request from '@/services/requset'
export function getdjNavInfo() {    
    return request({
        url:'/dj/catelist'
    })
}

export function getdjRecommend(type) {
    return request({
        url:'/dj/recommend/type',
        params:{
            type
        }
    })
}