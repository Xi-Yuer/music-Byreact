import request from '@/services/requset'
export function getTopPlayListData(cat){
    return request({
        url:'/top/playlist',
        params:{
            cat
        }
    })
}