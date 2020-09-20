 import { reqShopInfo } from '@/api/detail'
 import { shop } from './mutation-type'

 const state = {
     shopInfo: {}
 }
 const mutations = {
     shop(state, shopInfo) {
         state.shopInfo = shopInfo
     }
 }
 const getters = {
     menuInfo(state) {
         return state.shopInfo.menu
     },
     recommendInfo(state) {
         return state.shopInfo.recommend
     },
     redpackInfo(state) {
         return state.shopInfo.redpack
     },
     rstInfo(state) {
         return state.shopInfo.rst
     }
 }
 const actions = {
     async getShopInfo({ commit }) {
         const res = await reqShopInfo()
         commit('shop', res.data.data)
     }
 }

 export default {
     state,
     mutations,
     getters,
     actions
 }