import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;

import { Popup } from "vant";
import { Tab, Tabs } from "vant";
import { Icon } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Sidebar, SidebarItem } from "vant";

import '@/mock/mock-detail'

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem).use(Sidebar).use(SidebarItem)

new Vue({
    render: (h) => h(App),
    router,
    store,
}).$mount("#app");