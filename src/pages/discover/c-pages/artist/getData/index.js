import request from '@/services/requset'

export function getArtists(type,area,limit,offset) {
    return request({
        url:'/artist/list',
        isLoading:true,
        params:{
            type,
            area,
            limit,
            offset:offset*limit,
            initial:'-1'
        }
    })
}