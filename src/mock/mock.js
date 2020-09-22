const Mock = require('mockjs')
const shopList = require('./data/newShopList.json')
const homeNav = require('./data/homeNav.json')
const selectShippingAddress = require('./data/selectShippingAddress.json')
const cityList = require('./data/cityList.json')

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
Mock.mock('/mock/getCityList', {
  code: 200,
  message: '成功',
  data: cityList
})
