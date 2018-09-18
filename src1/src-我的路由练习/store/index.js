import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import {getShopList} from '@/serve/api'
let store=new Vuex.Store({
    
    state:{
        shoplist:[]
    },
    mutations:{
        changeShopList(state,plaload){
            state.list=plaload.list
        }
    },
    actions:{
        getShopListAction(store,plaload){
            console.log(getShopList(plaload))
            getShopList(plaload).then(({data})=>{
                data.data.list.forEach(item=>{
                    if(!item.hasOwnProperty('checked')){
                        item.checked=true
                    }
                })
                store.commit('changeShopList', {
                    list: data.data.list
                  })
          
            })
        }
    }
})
export default store;