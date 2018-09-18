// 配置二级，给路由使用和给导航使用
import Pinglun from '@/components/message-child/pinglun'
import Jianxin from '@/components/message-child/jianxin'
import Guanzhu from '@/components/message-child/guanzhu'
let messageChildren = [
  {
    path: '',
    title: '评论',
    name: 'Pinglun',
    component: Pinglun
  },
  {
    path: 'jianxin',
    title: '简信',
    name: 'Jianxin',
    component: Jianxin
  },
  {
    path: 'gaunzhu',
    title: '关注',
    name: 'Guanzhu',
    component: Guanzhu
  }
]

export default messageChildren;