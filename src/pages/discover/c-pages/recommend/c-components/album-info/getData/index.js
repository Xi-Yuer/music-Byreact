import request from '@/services/requset'
export function getAlbumInfo(id){
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}
export function getSimiAlbums(id){
    return request({
        url:'/simi/playlist',
        params:{
            id
        }
    })
}