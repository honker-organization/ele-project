
import Ajax from '@/ajax/Ajax'

import request from '@/ajax/Ajax'

//获取手机验证码  h5.ele的接口
// export const reqGetVerificationCode = () => Ajax.post('/restapi/eus/login/mobile_send_code')

//获取手机验证码  git接口
export const reqGetVerificationCode = () => Ajax.post('/v1/captchas')

//登录
export const reqLogin = (userInfo) => Ajax.post('/v2/login', userInfo)



const baseUrl = 'https://elm.cangdu.org'

// 获取店铺列表  请求方式：GET 请求路径：https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
export const reqShopList = () => request.get(`${baseUrl}/shopping/restaurants`)

// 可用红包   get   /promotion/v2/users/:user_id/hongbaos?limit=20&offset=0
// export const reqAvailableHongBaoList = (user_id) => Ajax.get(`/promotion/v2/users/${user_id}/hongbaos`)


//过期红包 get /promotion/v2/users/:user_id/expired_hongbaos?limit=20&offset=0
// export const reqExpiredHongBaoList = (limit,offset,user_id) => Ajax.get(`/promotion/v2/users/${user_id}/expired_hongbaos?${limit}&${offset}`)

// 兑换红包 post /v1/users/:user_id/hongbao/exchange

// export const reqExchangeHongBaoList = (user_id) => Ajax.post(`/v1/users/${user_id}/hongbao/exchange`)

export const reqConfirmOrderInfo = () => Ajax.get('http://localhost:3000/confirmorder')
//
