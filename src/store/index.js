import Vue from 'vue'
import Vuex from 'vuex'
import { getshopDetail} from '@/server'
Vue.use(Vuex);
let shopCarListLocalStorage = JSON.parse(localStorage.getItem('miaov-shop')) || {};
let shopCarListStorage = shopCarListLocalStorage.shopCarList || [];
let addressLocalStorage = JSON.parse(localStorage.getItem('miaov-shop')) || {};
let addAddressLocalStorage = addressLocalStorage.addAddress || [];

// [{sku_id,buyNumber}]
let store = new Vuex.Store({
  state:{
    shopCarList:shopCarListStorage, // [{},{},{}]
    addAddress:addAddressLocalStorage
  },
  getters: {
    // 统计选中的总数和总钱数
    total(state){
      let shopCarList=state.shopCarList.filter(item=>item.checked)
      return shopCarList.reduce((item1,item2) => {
        return {
          totalMoney: item1.totalMoney + item2.price * item2.buyNumber,
          totalBuyNumber: item1.totalBuyNumber + item2.buyNumber
        }
      },{
        totalMoney: 0,
        totalBuyNumber: 0
      })//初始值
    },
    total02(state){
      //统计总数和总钱数
      return state.shopCarList.reduce((item1,item2) => {
        return {
          totalMoney: item1.totalMoney + item2.price * item2.buyNumber,
          totalBuyNumber: item1.totalBuyNumber + item2.buyNumber
        }
      },{
        totalMoney: 0,
        totalBuyNumber: 0
      })//初始值
    },
    checkedboxAll(state){
      return state.shopCarList.every(item=>item.checked)
    },
    detailData(){
      return 
    }
  },
  mutations:{
    addShopCarList(state,payload){ // {shop: {}}  商品的信息
    debugger
      let item = state.shopCarList.find((item) => item.sku_id == payload.shop.sku_id)
      console.log(item)
      if(item){
        item.buyNumber=item.buyNumber+payload.number
      }else{
        // 变成响应的
        Vue.set(payload.shop,'buyNumber',payload.number)

        state.shopCarList.push(payload.shop);
        console.log(state.shopCarList)
      }
    },
    addShopCaritem(state,playload){//增加数量
      // debugger
        let item = state.shopCarList.find((item) => item.sku_id ===playload.sku_id)
        console.log(state.shopCarList)
        // Object.assign(playload,...item.shop_info)
       if(item.limit_num){
         console.log(playload.limit_num)
        if(item.buyNumber<playload.limit_num){
          ++item.buyNumber
        }
       }else{
        ++item.buyNumber
      }
    },
    reduceShopCaritem(state,playload){//减少数量
      // debugger
        let item = state.shopCarList.find((item) => item.sku_id ===playload.sku_id)
       if(item){
        if(item.buyNumber>0){
          --item.buyNumber
          console.log(item.buyNumber)
        }else{
          alert('已是最小数量')
        }
       }
    },
    delDataOnegoods(state,payload){
      // debugger
      console.log(payload)
      let index= state.shopCarList.findIndex(item=>{
        console.log(state.shopCarList)
        return item.sku_id==payload.sku_id
        
      })
      console.log(index)
      state.shopCarList.splice(index,1)
    },
    checkOneBox(state,payload){//单选
      // debugger
      let index= state.shopCarList.findIndex(item=>{
        console.log(state.shopCarList)
        return item.sku_id==payload.sku_id
        
      })
      state.shopCarList[index].checked=!state.shopCarList[index].checked
    },
    checkAllBox(state,payload){//全选
      // debugger
        state.shopCarList.forEach(item=>{
          item.checked=payload
        })
    },
    delcardata(state,payload){//删除小购物车里的数据
      state.shopCarList.splice(payload,1)
    },
    replaceShopList(state,playload){  // {list:[]}
    state.shopCarList = playload.list;
    console.log(state.shopCarList )
    },
    replaceAddress(state,payload){
      // debugger
      state.addAddress = payload.addAddressLocalStorage;
    },
    addNewAddress(state,payload){
      // debugger
      console.log(payload.address)
      let defaults=payload.address
      Object.assign(defaults,payload.select)
      state.addAddress.push(defaults)
      console.log(state.addAddress)
    },
    deleteAddress(state,payload){
      state.addAddress.splice(payload,1)
    },
    updateAddress(state,payload){
      
    }

  },
  actions:{
    getShopCarListInfoAction(store,playload){ //{ids:',,'}
      return getshopDetail(playload).then(({data}) => {
        console.log(data.data.list)
        let list = data.data.list.map((item) => {
          console.log(item.shop_info)
          // 后端给的数据中没有buyNumber，所以要根据后端给的数据从localstorage中找到数据
          // 拿到buyNumber
          let option = shopCarListStorage.find(abc => abc.sku_id == item.id)
          return {
            ...item.shop_info,
            sku_id: item.id,
            price: item.price,
            buyNumber: option.buyNumber,
            checked:true
          }
        })
        store.commit('replaceShopList',{
          list: list
        })
      });
    },
    getAddressAction(store){
      return ()=>{
        store.commit('replaceAddress',{addAddressLocalStorage:addAddressLocalStorage})
        }
      }
  }
})

store.watch((state) => {
  return {
    shopCarList: state.shopCarList,
    addAddress:state.addAddress
  }
},(newValue) => {

  // 把值存在localStorage中
  localStorage.setItem('miaov-shop', JSON.stringify(newValue))
  console.log(JSON.parse(localStorage.getItem('miaov-shop')))
},{
  deep: true,
});



export default store;