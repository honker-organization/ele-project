import cxh from '@/api/position-cxh'
import setImagePath from '@/utils/imagePath'
let num = 0
const state = {
  shopList: [], // 获取商铺列表
}
const mutations = {
  UPDATESHOPLIST (state, shopList) {
    state.shopList = shopList
  }
}
const actions = {
  async getShopList ({ commit, state }) {
    // 发送请求
    num += 10
    const res = await cxh.reqShopList()
    if (res.code === 200) {
      const shopList = state.shopList.concat(setImagePath(res.data.items).slice(num - 10 < 0 ? 0 : num - 10, num))
      commit('UPDATESHOPLIST', shopList)
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
