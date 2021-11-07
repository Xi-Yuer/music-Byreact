import creatAction from '@/store/create-action'
import { GETBANNERS,GETRECOMMENDS,GETNEWALBUM } from '@/store/config'
import request from '@/services/requset'
import createAction from '@/store/create-action'

// 获取轮播图
export const getBanners = (dispatch)=>{
    request({
        url:'banner'
    }).then(res=>{
        dispatch(creatAction(GETBANNERS,res.banners))
    })
}

// 热门推荐
export const getRecommends = (dispatch)=>{
    request({
        url:'/personalized?limit=8'
    }).then(res=>{
        dispatch(creatAction(GETRECOMMENDS,res.result))
    })
}

// 新碟上架
export const getNewAlbum = (dispatch) => {
    request({
        url:'/top/album?offset=0&limit=10'
    }).then(res=>{
        dispatch(createAction(GETNEWALBUM,res.albums))
    })
}