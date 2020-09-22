import {reqLogin,reqGetVerificationCode} from '@/api'
const state = {
  userInfo: {},
  code:{}
}

const mutations = {
  RECEIVEUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },
  RECEIVECODE(state,code){
    state.code = code
  }
}

const actions = {
  async userLogin({commit},userInfo){    
    const result = await reqLogin(userInfo)
    if(result.status === 0){
      commit('RECEIVEUSERINFO',result.data)
    }
  },

  // 获取验证码
  async getCode({commit}){
    const result = await reqGetVerificationCode()

    commit('RECEIVECODE',result)
  }
}

const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}