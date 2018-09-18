// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import {getTopics} from '@/serve/index'
import api from '@/serve/index'
Vue.use(api)

import './assets/index.css'

Vue.config.productionTip = false
Vue.use({
  install(Vue){
    Vue.prototype.miaov=10;
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router: router,
  router,
  components: { App },
  template: '<App/>',
  created(){
    this.$api.getTopics().then(({data})=>{
      console.log(data.data)
    })
  }
})
