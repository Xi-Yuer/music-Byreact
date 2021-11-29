import request from '@/services/requset'

// 歌手描述
export function getSingerInfo(id){
    return request({
        isLoading:true,
        url:'/artist/desc',
        params:{
            id,
            cookie:window.localStorage.getItem('cookie'),
            token:window.localStorage.getItem('token')
          }
    })
}


// 歌手歌曲
export function getSingerSongs(id) {
    return request({
        isLoading:true,
        url:'/artist/top/song',
        params:{
            id,
            cookie:window.localStorage.getItem('cookie'),
            token:window.localStorage.getItem('token')
          }
    })
}

// 相似歌手
export function getSimiSinger(id) {
    return request({
        isLoading:true,
        url:'/simi/artist',
        params:{
            id,
            cookie:window.localStorage.getItem('cookie'),
            token:window.localStorage.getItem('token')
          }
    })
}