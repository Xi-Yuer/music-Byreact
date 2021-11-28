import request from '@/services/requset'
export function getScanKey() {
    return request({
        url:'/login/qr/key',
        params:{
            timestamp:Date.parse(new Date()) / 1000
        }
    })
}