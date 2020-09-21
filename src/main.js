import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import api from '@/api'
import { Icon, DropdownMenu, Skeleton, DropdownItem, Search, IndexBar, IndexAnchor, Cell, Button, Field, Form } from 'vant'
import './config/flexible'
// 引入mock，让mock.js生效
import '@/mock/mock'
Vue
  .use(Icon)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Search)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)
  .use(Button)
  .use(Field)
  .use(Form)
  .use(Skeleton)
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
