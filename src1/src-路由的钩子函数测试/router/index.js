import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routerConfig} from '@/router/routerConfig'

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'jihuo',
  linkExactActiveClass: 'jingquejihuo',
  // 写在在这里的属于是一级路径，匹配到的组件会替换app.vue中的router-view
  routes: [
    ...routerConfig,
    {
      path: '*'
    }
  ]
})

// 全局守卫
// 可以控制访问到响应视图渲染中间执行的函数
// 控制权交到下一个 next()
router.beforeEach((to, from, next) => {
  console.log(to); //即将要进入的目标 路由对象  到哪里去
  console.log(from) // 当前导航正要离开的路由 从哪里来
  console.log('beforeEach')
  next();
})
router.afterEach((to, from) => {
  console.log('afterEach')
})

export default router;