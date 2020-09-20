import Ajax from '@/ajax/Ajax'

//获取手机验证码  h5.ele的接口
// export const reqGetVerificationCode = () => Ajax.post('/restapi/eus/login/mobile_send_code')

//获取手机验证码  git接口
// export const reqGetVerificationCode = () => Ajax.post('/v1/captchas')

//登录
export const reqLogin = (userInfo) => Ajax.post('/v2/login',userInfo)