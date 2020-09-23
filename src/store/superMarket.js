import service from "@/ajax/mockAjax";
const state = {
  merchantList:[]
}
const mutations = {
  TMERCHANTLIST(state,data){
    state.merchantList = data
  },
  MERCHANTLISTSORT(state,data){
    switch(data){
      case 1://销量
        state.merchantList.sort((a,b)=>{
          return b.sales - a.sales
        })
        break;
      case 2://距离
        state.merchantList.sort((a,b)=>{
          return a.distance - b.distance
        })
        console.log(state.merchantList)
        break;
      case 3://好评
        state.merchantList.sort((a,b)=>{
          return b.score - a.score
        })
        break;
      default:
        break
    }
  }
}
const actions = {
  async getMerchantList({commit}){
    const res = await service('/getMerchantList')
    commit("TMERCHANTLIST",res.data)
  },
  //排序
  merchantListSort({commit},data){
    commit('MERCHANTLISTSORT',data)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
