import {reqLogin,reqGetVerificationCode} from '@/api'
const state = {
  userInfo: {},
  verificationCode:{}
}

const mutations = {
  RECEIVEUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },
  RECEIVEVERIFICATIONCODE(state,verificationCode){
    state.verificationCode = verificationCode
  },
  clearVerificationCode(state){
    state.verificationCode = ''
  }
}

const actions = {
  async userLogin({commit},userInfo){    
    const result = await reqLogin(userInfo)
    if(result.status === 1){
      // console.log(result)
      commit('RECEIVEUSERINFO',result.data)
    }
  },
  async getVerificationCode({commit}){
    const result = await  reqGetVerificationCode()
    if(result.status === 1){
      // console.log(result)
      commit('RECEIVEVERIFICATIONCODE',result.code)
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