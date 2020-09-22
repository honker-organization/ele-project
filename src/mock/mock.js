const Mock = require('mockjs')
const shopList = require('./data/shopList.json')
const homeNav = require('./data/homeNav.json')
const selectShippingAddress = require('./data/selectShippingAddress.json')
Mock.mock('/mock/getShopList', {
  code: 200,
  message: '成功',
  data: shopList
})
Mock.mock('/mock/getHomeNav', {
  code: 200,
  message: '成功',
  data: homeNav
})


Mock.mock('/mock/getSelectShippingAddress', {
  code: 200,
  message: '成功',
  data: selectShippingAddress
})