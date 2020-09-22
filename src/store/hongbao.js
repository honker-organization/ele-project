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
  async getAvailableHongBaoList({commit},{limit,offset,user_id}){
    console.log(222)
    console.log({limit,offset,user_id})
    const result = await reqAvailableHongBaoList({limit,offset,user_id})
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