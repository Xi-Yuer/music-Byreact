import requset from '@/services/requset'
export function getNewAlbumInfo(id){
    return requset({
        url:'/album/detail',
        params:{
            id
        }
    })
}