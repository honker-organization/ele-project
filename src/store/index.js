import Vue from 'vue'
import Vuex from 'vuex'
import personal from './personal.js'
import login from '@/store/login'
import hongbao from '@/store/hongbao'
Vue.use(Vuex)

const state = {}

const mutations = {}

const actions = {}

const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    personal,
    login,
    hongbao
  }
})