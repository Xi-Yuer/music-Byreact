import request from '@/services/requset'
export function getTopPlayListData(cat){
    return request({
        url:'/top/playlist',
        params:{
            cat
        }
    })
}

// 分类信息
export function getCategoryInfo() {
    return request({
        url:'/playlist/catlist'
    })
}