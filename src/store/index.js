import Vue from 'vue'
import Vuex from 'vuex'
import personal from './personal.js'
import login from '@/store/login'
import superMarket from '@/store/superMarket'
import orderList from '@/store/orderList'
import address from '@/store/address'

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
    superMarket,
    orderList,
    address
  }
})