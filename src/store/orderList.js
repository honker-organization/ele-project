import service from '@/ajax/mockAjax'

const state = {
    orderList: []
}
const mutations = {
    ORDERLIST(state, data) {
        state.orderList = data
    },
    ISCHENKEDONE(state, index) {
        state.orderList[index].checked = !state.orderList[index].checked
    },
    UPDATECHEKENALL(state, isChecked) {
        state.orderList.forEach(item => item.checked = isChecked)
        // let isChecked = state.orderList.every(item=>item.checked)
        // if(isChecked){//改成false
        //     state.orderList.forEach(item=>item.checked = false)
        // }else{
        //     state.orderList.forEach(item=>item.checked = true)
        // }
    },
    UPDATANUM(state, { num, index }) {
        state.orderList[index].num = state.orderList[index].num + num
    }
}
const actions = {
    async getOrderList({ commit }) {
        const res = await service('/getOrderList')
        commit('ORDERLIST', res.data)
    },
    isChenkedOne({ commit }, index) {
        commit('ISCHENKEDONE', index)
    },
    updateChekenAll({ state, commit }) {
        let isChecked = !state.orderList.every(item => item.checked)
        commit('UPDATECHEKENALL', isChecked)
    },
    updataNum({ commit }, { num, index }) {

        commit('UPDATANUM', { num, index })
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}