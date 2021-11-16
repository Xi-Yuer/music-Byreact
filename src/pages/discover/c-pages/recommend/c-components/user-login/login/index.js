import request from '@/services/requset'
export function login(phone,password) {
    return request({
        url:'/login/cellphone',
        methods:'POST',
        params:{
            phone,
            password
        }
    })
}