const Mock = require('mockjs')
const shopList = require('./data/shopList.json')
const homeNav = require('./data/homeNav.json')
const baseAdd = require('./data/addList.json')
const merchantList = require('./data/merchant.json')
const orderList = require('./data/order.json')
Mock.mock('/mock/getShopList', {
  code: 200,
  message: '成功',
  data: shopList
})
Mock.mock('/mock/getHomeNav', {//icon
  code: 200,
  message: '成功',
  data: homeNav
})
Mock.mock('/mock/getBaseAdd', {
  code: 200,
  message: '成功',
  data: baseAdd
})

//kw
Mock.mock('/mock/getSuperMarketIcon', {
  code: 200,
  message: '成功',
  data: homeNav
})
Mock.mock('/mock/getMerchantList', {
  code: 200,
  message: '成功',
  data: merchantList
})
//订单
Mock.mock('/mock/getOrderList', {
  code: 200,
  message: '成功',
  data: orderList
})
