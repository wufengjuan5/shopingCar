// 配置二级，给路由使用和给导航使用
import pinglun from '@/components/message/pinglun'
import Jianxin from '@/components/message/jianxin'
import Guanzhu from '@/components/message/guanzhu'

let messagechilds=[
    {
        path: 'pinglun',
        name:'Pinglun',
        component:pinglun,
        title:"评论"
      },
      {
        path: 'jianxin',
        name:'Jianxin',
        component:Jianxin,
        title:"简信"

      },
      {
        path: 'guanzhu',
        name:'Guanzhu',
        component:Guanzhu,
        title:"关注"

      },
]
export default messagechilds