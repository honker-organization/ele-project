import axios from '@/ajax/Ajax'
import mockAxios from '@/ajax/mockAjax'
// 获取经纬度详情请求
export default {
  reqPosition (lat, long) {
    return axios({
      method: 'GET',
      url: `/v2/pois/${lat},${long}`,
    })
  },
  // 获取首页食品分类数据
  reqFoodCategory () {
    return mockAxios({
      method: 'GET',
      url: '/getHomeNav'
    })
  },
  // 获取商家列表
  reqShopList () {
    return mockAxios({
      method: 'GET',
      url: '/getShopList'
    })
  },
  //获取城市列表
  reqCityList () {
    return mockAxios({
      method: 'GET',
      url: '/getCityList'
    })
  }
}