
import Ajax from '@/ajax/Ajax'

import request from '@/ajax/Ajax'

import mockAxios from '@/ajax/mockAjax'

import cxh from '@/api/position-cxh'

export default {
  cxh,


}

const baseUrl = 'https://elm.cangdu.org'

//获取手机验证码  h5.ele的接口 post请求方式 https://elm.cangdu.org/v1/captchas
export const reqGetVerificationCode = () => Ajax.post(`${baseUrl}/v1/captchas`)

//获取手机验证码  git接口
// export const reqGetVerificationCode = () => Ajax.post('/v1/captchas')

//登录
export const reqLogin = (userInfo) => Ajax.post(`${baseUrl}/v2/login`, userInfo)

// 获取店铺列表  请求方式：GET 请求路径：https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
export const reqShopList = () => request.get(`${baseUrl}/shopping/restaurants`)


// 请求获取收货地址 请求方式GET 请求路径：`/getSelectShippingAddress
export const reqSelectShippingAddress = () => request.get(`http://localhost:3000/posts`)

export const reqUpadteShippingAddress = (data) => request.post('http://localhost:3000/posts',data)


// 请求删除我的地址
export const reqDeleteMyaddress = (id) => request.delete(`http://localhost:3000/posts/${id}`)

// 请求更新我的地址
export const reqUpdateMyaddress = (name, phone, address, number, call) => request.patch(`http://localhost:3000/posts/${id}`, {
  name,
  phone,
  address,
  number,
  call
})


// 获取评价数据 请求方式：GET 请求路径：https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10
export const reqGetCommit = () => request.get(`https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10`)
