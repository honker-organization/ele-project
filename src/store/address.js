import service from '@/ajax/mockAjax'
const state = {
    addList:[]
}
const mutations = {
    SETADDLIST(state,data){
        state.addList = data
    },
    ADDADDRESS(state,data){
        state.addList.unshift(data)
    }
}
const actions = {
    async getAddList({commit}){
        const res = await service('/getBaseAdd')
        commit('SETADDLIST',res.data)
    },
    addAddress({commit},data){
        commit('ADDADDRESS',data)
    }
}
const getters ={

}
export default {
    state,
    mutations,
    actions,
    getters
}
