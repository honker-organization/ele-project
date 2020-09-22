import cxh from '@/api'
import setImagePath from '@/utils/imagePath'
const state = {
  shopList:[]
}

const mutations = {
  RECEIVESHOPLIST(state, shopList){
    state.shopList = shopList
  }
}

const actions = {

  // 请求获取店铺数据
  async getShopList({commit}){
    console.log(cxh)
    const result = await cxh.cxh.reqShopList()
    const shopList = setImagePath(result.data.items)
    if(result.code === 200){
      commit('RECEIVESHOPLIST', shopList)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}