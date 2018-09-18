// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './server'
import store from './store'
Vue.use(api);
import iView from 'iview'
Vue.use(iView);
import '@/assets/css/account.css';
import '@/assets/css/address-pop.css';
import '@/assets/css/address.css';
import '@/assets/css/cart.css';
import '@/assets/css/checkout.css';
import '@/assets/css/goodsList.css';
import '@/assets/css/header.css';
import '@/assets/css/item.css';
import '@/assets/css/order.css';
import '@/assets/css/payment.css';
import '@/assets/css/prompt.css';
import '@/assets/css/reset.css';
               
// 把你注册全局的组件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('./assets/img/loading.gif')
});
Vue.config.productionTip = false
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker',VDistpicker)
// Vue插件编写 插件就是给库或者框架扩展功能
// 扩展到原型上 Vue.prototype上
// 写插件的格式
Vue.use({
  install(Vue){
    // 在这里写插件
    Vue.prototype.miaov = 10;
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
