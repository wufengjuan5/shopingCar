import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
Vue.use(Vuex);
 
let list=JSON.parse(localStorage.getItem('miaov'))||[]
let store=new Vuex.Store({
    state:{
        list:list,
        beforeTitle:'',
        hash:'all'
    },
    getters:{
        isCheckedAll(state){
            return state.list.every(item=>item.checked)
        },
        unChecked(state){
            return state.list.filter(item=>!item.checked).length
        },
        listFilter(state){
            if(state.hash==="all"){
              return  state.list
            }else if(state.hash==="active"){
                return state.list.filter(item=>!item.checked);
            }else{
                return state.list.filter(item=>item.checked)
            }
        }
    },
    mutations:mutations
})
export default store;