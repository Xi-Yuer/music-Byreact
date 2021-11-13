import requset from '@/services/requset'
export function getNewAlbumInfo(id){
    return requset({
        url:'/album/detail',
        params:{
            id
        }
    })
}
export function getNewAlbumComments(id){
    return requset({
        url:'/comment/album',
        params:{
          id
        }
    })
}