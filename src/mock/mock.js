const Mock = require('mockjs')
const shopList = require('./data/shopList.json')
const homeNav = require('./data/homeNav.json')
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
