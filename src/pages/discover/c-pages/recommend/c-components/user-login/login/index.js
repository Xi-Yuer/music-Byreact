import request from '@/services/requset'
export function login(phone,password) {
    return request({
        url:'/login/cellphone',
        methods:'POST',
        params:{
            phone,
            password,
            timestamp:Date.parse(new Date()) / 1000
        }
    })
}
export function getUserInfo(uid) {
    return request({
        url:'/user/detail',
        params:{
            uid
        }
    })
}