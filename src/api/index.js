import request from  '@/ajax/Ajax'

const baseUrl = 'https://elm.cangdu.org'
 
// 获取店铺列表  请求方式：GET 请求路径：https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
export const reqShopList = () => request.get(`${baseUrl}/shopping/restaurants`)