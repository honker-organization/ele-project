import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './config/rem'
import { Button ,NavBar,Icon,Cell, CellGroup,Form,Field,Popup,Toast,tag } from 'vant';
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup).use(Form).use(Field).use(Popup).use(Toast).use(tag)
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
