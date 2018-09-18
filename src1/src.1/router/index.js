import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routerConfig} from '@/router/routerConfig'
let router=new VueRouter({
  mode:'history',
  routes:[
    ...routerConfig,
    {
      path:'*',
      redirect(to){
        return {name:'Find'}
      }
    }
  ]
})


export default router;