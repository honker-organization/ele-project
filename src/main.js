import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
<<<<<<< HEAD
import less from 'less'
Vue.use(less)
import './config/rem.js'
=======
import './config/flexible'
>>>>>>> master

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
