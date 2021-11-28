import request from '@/services/requset'

export function getArtists(type,area,limit,offset) {
    return request({
        url:'/artist/list',
        params:{
            type,
            area,
            limit,
            offset:offset*limit,
            initial:'-1',
            cookie:window.localStorage.getItem('cookie'),
            token:window.localStorage.getItem('token')
        }
    })
}