import requset from '@/services/requset'
export function getNewAlbumInfo(id){
    return requset({
        url:'/album/detail',
        params:{
            id,
            cookie:window.localStorage.getItem('cookie')
        }
    })
}
export function getNewAlbumComments(id){
    return requset({
        url:'/comment/album',
        params:{
          id,
          cookie:window.localStorage.getItem('cookie')
        }
    })
}

export function getAllAlbum() {
    return requset({
        url:'/album/newest',
        params:{
            cookie:window.localStorage.getItem('cookie')
        }
    })
}