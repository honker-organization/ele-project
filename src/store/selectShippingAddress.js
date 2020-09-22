import {reqSelectShippingAddress,reqDeleteMyaddress} from '@/api'

const state = {
  selectShippingAddressList:[]

}

const mutations = {
  RECEIVESELECTSHIPPINGADDRESSLIST(state, selectShippingAddressList){
    state.selectShippingAddressList = selectShippingAddressList
  },

  DELETSMYADDRESS(state, id){
   state.selectShippingAddressList = [...state.selectShippingAddressList]

  }
  
}

const actions = {

  // 异步请求数据
  async getSelectShippingAddressList({commit}){
  //  console.log(111)
    const result = await reqSelectShippingAddress()
    // console.log(result)
   
      // 提交数据
      commit('RECEIVESELECTSHIPPINGADDRESSLIST', result)
    
  },

  // 请求删除我的地址
  async deleteMyaddress({commit},id){
    const result = await reqDeleteMyaddress(id)
    if(result.code === 200){
      commit('DELETSMYADDRESS')
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