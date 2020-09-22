import Vue from "vue";
import App from "./App.vue";
//这是一个瀑布流滚动插件
import VirtualCollection from "vue-virtual-collection";
import "element-ui/lib/theme-chalk/index.css";
import router from "@/router";
import store from "@/store";
import api from "@/api";
// import './config/flexible'
import "@/mock/mock";
import "@/mock/mock-detail";
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
  Tabbar,
  TabbarItem,
  Sticky,
  Checkbox,
  Stepper,
  Tag,
  Loading,
  PullRefresh,
  List
} from "vant";
import "./config/rem";


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
  .use(SidebarItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Loading)
  .use(PullRefresh)
  .use(Sticky)
  .use(Checkbox)
  .use(Stepper)
  .use(Tag)
  .use(List)
Vue.use(VirtualCollection);
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  beforeCreate () {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
