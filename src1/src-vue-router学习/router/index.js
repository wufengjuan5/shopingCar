import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/components/Home'
import About from '@/components/About'
import NotFound from '@/components/404'
import Message from '@/components/message'
import Singer from '@/components/singer'
import SingerInfo from '@/components/singer-views/info'
import MessageChild from '@/components/message-views/MessageChild'

let router = new VueRouter({
  mode: 'history',
  // 写在在这里的属于是一级路径，匹配到的组件会替换app.vue中的router-view
  routes: [
    {
      path: '/',
      name:'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/message122456',
      name: 'Message',
      component: Message,
      children:[
        {
          path: 'message-child',
          component: MessageChild
        }
      ]
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children:[
        {
          path: 'info',  // /singer/info
          name: 'SingerInfo',
          component: SingerInfo
        }
      ]
    },
    {
      path: '/message/abc/fff/jjj',
      component: Message
    },
    {
      path: '*',
      //component: NotFound
      //redirect: '/'
      /* redirect: {
        path: '/',
        query: {a:1,b:2}  // ?a=1&b=2
      } */
      //redirect: { name:'Message'}
      redirect(to){
        if(to.path === '/miaov'){
          return { name: 'Message' }
        } else if (to.path === '/ketang'){
          return { name: 'About' }
        }
        return { path: '/' }
      }
    }
  ]
})

export default router;