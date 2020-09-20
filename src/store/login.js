import {reqLogin} from '@/api'
const state = {
  userInfo: {}
}

const mutations = {
  RECEIVEUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },
}

const actions = {
  async userLogin({commit},userInfo){    
    const result = await reqLogin(userInfo)
    if(result.code === 200){
      commit('RECEIVEUSERINFO',result.data)
    }
  },
}

const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}