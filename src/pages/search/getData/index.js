import request from '@/services/requset'
export function getSearchData(keywords,type,limit,offset) {
    return request({
        url:'/search',
        params:{
            keywords ,
            type,
            limit,
            offset:offset*limit
        }
    })
}