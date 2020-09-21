import {
    reqShopInfo,
    reqFoods,
    updateFood,
    reqAddFood,
    deleteFood,
} from "@/api/detail";
import { shop, food, add } from "./mutation-type";

const state = {
    shopInfo: {},
    foodInfo: [],
};
const mutations = {
    shop(state, shopInfo) {
        state.shopInfo = shopInfo;
    },
    food(state, foodInfo) {
        state.foodInfo = foodInfo;
    },
};
const getters = {
    menuInfo(state) {
        return state.shopInfo.menu;
    },
    recommendInfo(state) {
        return state.shopInfo.recommend;
    },
    redpackInfo(state) {
        return state.shopInfo.redpack;
    },
    rstInfo(state) {
        return state.shopInfo.rst;
    },
};
const actions = {
    async getShopInfo({ commit }) {
        const res = await reqShopInfo();
        commit("shop", res.data);
    },
    async getFoodsInfo({ commit }) {
        const res = await reqFoods();

        commit("food", res.data);
    },

    async getUpdateFood({ commit }, { foodId, num }) {
        console.log('添加数量');

        await updateFood(foodId, num);
    },
    async getAddFood({ commit }, { foodId, num, name, price }) {
        await reqAddFood(foodId, num, name, price);
    },
    async delFood({ commit }, { foodId }) {
        await deleteFood(foodId);
    },
};

export default {
    state,
    mutations,
    getters,
    actions,
};