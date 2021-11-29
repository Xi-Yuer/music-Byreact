import request from '@/services/requset'
export function getTopPlayListData(cat,limit,offset){
    return request({
        isLoading:true,
        url:'/top/playlist',
        params:{
            cat,
            limit,
            offset:offset*limit
        }
    })
}

// 分类信息
export function getCategoryInfo() {
    return request({
        isLoading:true,
        url:'/playlist/catlist'
    })
}