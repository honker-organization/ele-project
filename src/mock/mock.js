const Mock = require('mockjs')
const shopList = require('./data/newShopList.json')
const homeNav = require('./data/homeNav.json')
const cityList = require('./data/cityList.json')
Mock.mock('/getShopList', {
  code: 200,
  message: '成功',
  data: shopList
})
Mock.mock('/getHomeNav', {
  code: 200,
  message: '成功',
  data: homeNav
})
Mock.mock('/getCityList', {
  code: 200,
  message: '成功',
  data: cityList
})
