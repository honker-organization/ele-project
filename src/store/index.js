import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import detail from './detail'
const store = new Vuex.Store({
    modules: {
        detail
    }
})

export default store