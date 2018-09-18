import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { getShopList } from '@/server/api'

let store = new Vuex.Store({
  state: {
    shopList: []
  },
  getters:{
    // 其他组件用写在这里
    isCheckedAll(state) {
      return state.shopList.every(item => item.checked)
    },
    checkedLength(state) {
      console.log(state.shopList.filter(item => item.checked).length)
      return state.shopList.filter(item => item.checked).length;
    },
    checkedMoney(state) {
      return state.shopList.reduce((item1,item2) => {
        if (item2.checked){
            return {
              totalMoney: item1.totalMoney + item2.buyNumber * item2.price,
              totalNum: item1.totalNum + item2.buyNumber,
              checkedNum: item1.checkedNum + 1,
            }
        }else{
          return {
            totalMoney: item1.totalMoney,
            totalNum: item1.totalNum + item2.buyNumber,
            checkedNum: item1.checkedNum
          }
        }
      },{totalMoney: 0,totalNum:0,checkedNum:0});
    }
  },
  mutations:{
    changeShopList(state,playload){ // {list:[]}
      state.shopList = playload.list;
    },
    toggleOneById(state, playload) { // {id,checked}
      let item = state.shopList.find(item => item.skuId === playload.skuId)
      if (item) {
        item.checked = playload.checked
      }
    },
    toggleAll(state, playload) { // {checked}
      state.shopList.forEach((item) => {
        item.checked = playload.checked;
      })
    }
  },
  actions: {
    /* async getShopListAction(store,playload){
      let {data} = await getShopList(playload);
      store.commit('changeShopList',{
        list: data.data.list
      })
    } */
    getShopListAction(store, playload) {
      return getShopList(playload).then(({data}) => {
        // 自己添加标示
        data.data.list.forEach((item) => {
          if (!item.hasOwnProperty('checked')){
            item.checked = true;
          }
        })
        store.commit('changeShopList', {
          list: data.data.list
        })
      })
    }
  }
})

export default store;
