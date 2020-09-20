import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import less from 'less'
Vue.use(less)
import './config/rem.js'

Vue.config.productionTip = false

import {
  List
} from 'vant';

Vue.use(List);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
