import cxh from '@/api/position-cxh'
import setImagePath from '@/utils/imagePath'
let num = 0
const state = {
  shopList: [], // 获取商铺列表
  searchList: [] // 搜索用的数据
}
const mutations = {
  UPDATESHOPLIST (state, { shopList, searchList }) {
    state.shopList = shopList
    state.searchList = searchList
  }
}
const actions = {
  async getShopList ({ commit, state }) {
    // 发送请求
    num += 10
    const res = await cxh.reqShopList()
    if (res.code === 200) {
      const shopList = state.shopList.concat(setImagePath(res.data.items).slice(num - 10 < 0 ? 0 : num - 10, num))
      commit('UPDATESHOPLIST', { shopList, searchList: setImagePath(res.data.items) })
    }
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
