import request from '@/services/requset'
export function getSearchData(keywords,type) {
    return request({
        url:'/search',
        params:{
            keywords ,
            type
        }
    })
}