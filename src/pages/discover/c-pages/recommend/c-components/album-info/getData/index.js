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
        isLoading:false,
        params:{
            id
        }
    })
}

export function getItemInfo(ids) {
    return request({
        url:'song/detail',
        isLoading:false,
        params:{
            ids
        }
    })
}