import request from '@/services/requset'
export function getAlbumInfo(id){
    return request({
        url:'/playlist/detail',
        params:{
            id,
            cookie:window.localStorage.getItem('cookie'),
            token:window.localStorage.getItem('token')
        }
    })
}
export function getSimiAlbums(id){
    return request({
        url:'/simi/playlist',
        params:{
            id,
            cookie:window.localStorage.getItem('cookie'),
            token:window.localStorage.getItem('token')
        }
    })
}

export function getItemInfo(ids) {
    return request({
        url:'song/detail',
        params:{
            ids
        }
    })
}