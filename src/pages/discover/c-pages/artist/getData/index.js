import request from '@/services/requset'

export function getArtists(type,area) {
    return request({
        url:'/artist/list',
        params:{
            type,
            area,
            limit:32
        }
    })
}