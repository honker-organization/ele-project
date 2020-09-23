
import Ajax from '@/ajax/Ajax'

import cxh from './position-cxh.js'
export default {
  cxh
}
import request from '@/ajax/Ajax'

//获取手机验证码  h5.ele的接口
// export const reqGetVerificationCode = () => Ajax.post('/restapi/eus/login/mobile_send_code')

//获取手机验证码  git接口
// export const reqGetVerificationCode = () => Ajax.post('/v1/captchas')

//登录
export const reqLogin = (userInfo) => Ajax.post('/v2/login', userInfo)



const baseUrl = 'https://elm.cangdu.org'

// 获取店铺列表  请求方式：GET 请求路径：https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
export const reqShopList = () => request.get(`${baseUrl}/shopping/restaurants`)
