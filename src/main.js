import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import api from "@/api";
import {
  Sidebar,
  SidebarItem,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  NavBar,
  CellGroup,
  Toast,
  Popup,
  Icon,
  DropdownMenu,
  Skeleton,
  DropdownItem,
  Search,
  IndexBar,
  IndexAnchor,
  Cell,
  Button,
  Field,
  Form,
} from "vant";
import "./config/rem";

// 引入mock，让mock.js生效
import "@/mock/mock";
Vue.use(Icon)
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
  .use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Swipe)
  .use(SwipeItem)
  .use(Sidebar)
  .use(SidebarItem);

import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.$api = api;

Vue.config.productionTip = false;

import "@/mock/mock-detail";

import { List } from "vant";

Vue.use(List);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
