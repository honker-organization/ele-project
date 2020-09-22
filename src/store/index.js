import Vue from "vue";
import Vuex from "vuex";
import personal from "./personal.js";
import login from "@/store/login";
import detail from "./detail";

import selectShippingAddress from "@/store/selectShippingAddress";
import shop from "@/store/shop";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    personal,
    login,
    detail,
    selectShippingAddress,
    shop,
  },
});
