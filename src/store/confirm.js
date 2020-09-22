
import {reqConfirmOrderInfo} from '@/api'
const state = {
  confirmOrderInfo:[],
}

const mutations = {
  RECEIVECONFIRMORDERINFO(state,confirmOrderInfo){
    state.confirmOrderInfo = confirmOrderInfo
  }
}

const actions = {
  async getConfirmOrderInfo({commit}){
    const res =  await reqConfirmOrderInfo()
    // console.log(res)
    if(res.status === 200){
      commit('RECEIVECONFIRMORDERINFO',res.data)
    }
   
  }
}

const getters = {
  confirmOrder(state){
    return state.confirmOrderInfo.filter(item => item.id === 1) || []
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}