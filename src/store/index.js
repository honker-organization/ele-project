import Vue from 'vue'
import Vuex from 'vuex'
import cxh from './modules/cxh'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    cxh
  }
})