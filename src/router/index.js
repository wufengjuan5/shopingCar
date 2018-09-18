import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import ShopList from '@/views/shoplist/shoplist'
import Carousel from '@/views/shoplist/carousel'
import navSub from '@/components/header/navSub'
import Detail from '@/views/detail/detail'
import Car from '@/views/car/car'
import Checkout from '@/views/checkout/checkout'
import Payment from '@/views/payment/payment'
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/shop_list'
    },
    {
      path: '/shop_list',
      name: 'shop_list',
      components:{
        Carousel:Carousel,
        default:ShopList
      }
    },
    {
      path: '/item/:sku_id',
      name: 'item',
      component: Detail
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    }
  ]
})
