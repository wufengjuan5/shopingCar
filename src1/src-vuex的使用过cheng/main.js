// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

let store = new Vuex.Store({
  state: {
    n: 10
  },
  mutations: {
    // key:function
    // 写成key值对应一个函数，函数会接受state作为参数
    changeN(state,payload){
      state.n = payload.k;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  //store: store
  store
})
