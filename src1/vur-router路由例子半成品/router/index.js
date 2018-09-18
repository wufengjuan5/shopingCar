import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routerConfig} from '@/router/routerConfig'

let router = new VueRouter({
  mode: 'history',
  // 写在在这里的属于是一级路径，匹配到的组件会替换app.vue中的router-view
  routes: [
    ...routerConfig,
    {
      path: '*'
    }
  ]
})

export default router;