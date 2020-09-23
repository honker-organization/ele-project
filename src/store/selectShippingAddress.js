import {reqSelectShippingAddress} from '@/api'

const state = {
  selectShippingAddressList:[]

}

const mutations = {
  RECEIVESELECTSHIPPINGADDRESSLIST(state, selectShippingAddressList){
    state.selectShippingAddressList = selectShippingAddressList
  },
  ADDSELECTSHIPPINGADDRESSLIST(state, addselectShippingAddressList){
    // console.log(addselectShippingAddressList)
    state.selectShippingAddressList.push(addselectShippingAddressList)
     
     console.log(state.selectShippingAddressList)
  }
}

const actions = {

  // 异步请求数据
  async getSelectShippingAddressList({commit}){
  //  console.log(111)
    const result = await reqSelectShippingAddress()
    if(result.code === 200){
      // 提交数据
      commit('RECEIVESELECTSHIPPINGADDRESSLIST', result.data)
    }
  },

  // 增加地址
  addSelectShippingAddressList({commit},addList){
    // console.log(addList)
    commit('ADDSELECTSHIPPINGADDRESSLIST', addList)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}