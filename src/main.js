import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import api from '@/api'
import { Tag ,Card,NavBar, CellGroup, Toast, Popup, Icon, DropdownMenu, Skeleton, DropdownItem, Search, IndexBar, IndexAnchor, Cell, Button, Field, Form,Uploader,Tab, Tabs } from 'vant'
import './config/rem'

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
  .use(NavBar)
  .use(CellGroup)
  .use(Popup)
  .use(Toast)
  .use(Uploader)
  .use(Tab)
  .use(Tabs)
  .use(Card )
  .use(Tag)
Vue.prototype.$api = api

Vue.config.productionTip = false

import {
  List
} from 'vant';

Vue.use(List);

new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
