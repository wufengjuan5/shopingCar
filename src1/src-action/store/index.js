import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    n: 10
  },
  mutations:{
    changeN(state, plaload) { // {abc}
      state.n = plaload.abc
    },
    changeN2(state, plaload) { // {abc}
      // mutation中不能写异步操作，只能写同步，也就说当提交这个mutation的时候，一定是立马改变state的值
      /* setTimeout(() => {
        let n = state.n;
        state.n = ++n;
      }, 1000); */
      let n = state.n;
      state.n = ++n;
    }
  },
  actions:{
    // 接受当前这个stroe实例
    changeNAction(store,plaload){
      console.log('触发了action',plaload)
      setTimeout(() => {
        store.commit('changeN2')
      }, 1000);
    }
  }
})

export default store;