import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './config/flexible'
import { Button ,NavBar,Icon,Cell, CellGroup } from 'vant';

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
