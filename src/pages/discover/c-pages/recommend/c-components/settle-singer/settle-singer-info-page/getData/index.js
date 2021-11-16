import request from '@/services/requset'

// 歌手描述
export function getSingerInfo(id){
    return request({
        url:'/artist/desc',
        params:{
            id
          }
    })
}


// 歌手歌曲
export function getSingerSongs(id) {
    return request({
        url:'/artist/top/song',
        params:{
            id
          }
    })
}

// 相似歌手
export function getSimiSinger(id) {
    return request({
        url:'/simi/artist',
        params:{
            id
          }
    })
}