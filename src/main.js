import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import api from '@/api'
import {
  NavBar,
  CellGroup,
  Toast,
  PullRefresh,
  Popup,
  Icon,
  DropdownMenu,
  Loading,
  Skeleton,
  DropdownItem,
  Search,
  IndexBar,
  IndexAnchor,
  Cell,
  Button,
  Field,
  Form,
  Tabbar,
  TabbarItem,
  Sticky,
  Checkbox,
  Stepper,
  Tag
} from 'vant'
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
  .use(Tabbar)
  .use(TabbarItem)
  .use(Loading)
  .use(PullRefresh)
  .use(Sticky)
  .use(Checkbox)
  .use(Stepper)
  .use(Tag)
Vue.prototype.$api = api

Vue.config.productionTip = false

import {
  List
} from 'vant';

Vue.use(List);

Vue.prototype.$bus = this

new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
