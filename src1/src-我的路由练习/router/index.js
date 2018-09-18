import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/components/home'
import About from '@/components/about'
import Message from '@/components/message'
import Singer from '@/components/singer'
import Use from '@/components/use'
import SingerInfo from '@/components/singerinfo'
 let router=new VueRouter({  
     mode:'history',
     routes:[
         {path:'/',component:Home,name:"home"},
         {path:'/about123',component:About,name:"about"},
         {path:'/user/:abc?',component:Use,name:"Use"},
         {path:'/message',component:Message,name:"message"},
         {path:'/singer',component:Singer,name:"singer",
         children:[{path:'singerInfo',component:SingerInfo,name:"singerInfo"}]},

        ],

    // redirect(){
    //     return {
    //         path:'/'
    //     }
    // }
 })
export default router