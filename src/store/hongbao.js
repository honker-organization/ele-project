import {reqAvailableHongBaoList} from '@/api'
const state = {
  availableHongBaoList:[]
}

const mutations = {
  RECEIVEAVAILABLEHONGBAOLIST(state,availableHongBaoList){
    state.availableHongBaoList = availableHongBaoList
  }
}

const actions = {
  async getAvailableHongBaoList({commit},user_id){
    console.log(222)
    console.log(user_id)
    const result = await reqAvailableHongBaoList(user_id)
    console.log(result)
    if(result.code === 200){
      console.log(result.data)
      commit('RECEIVEAVAILABLEHONGBAOLIST',result.data)
    }
  }
}

const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}