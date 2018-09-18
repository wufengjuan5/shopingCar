import Find from '@/components/find'
import Look from '@/components/look'
import Message from '@/components/message'

// 这一个配置在router里面生成路由对象使用，生成导航使用

export let routerConfig = [
  {
    path: '/',
    name: 'Find',
    title: '发现',
    component: Find
  },
  {
    path: '/look/:id?',
    name: 'Look',
    title: '关注',
    component: Look
  },
  {
    path: '/message',
    name: 'Message',
    title: '消息',
    component: Message,
    children:[
      {
        path: 'pinglun'
      }
    ]
  }
]