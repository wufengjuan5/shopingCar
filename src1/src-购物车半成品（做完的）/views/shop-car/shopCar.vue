<template>
  <div class="shop-cart">
    <div style="text-align:center;" v-show="loading">
      <img src="@/assets/timg.gif" >
    </div>
    <div class="content" v-show="!loading">
      <div v-show="!shopList.length" class="cart-empty" id="J_cartEmpty">
          <h2>您的购物车还是空的！</h2>
          <a href="" class="btn btn-primary btn-shoping J_goShoping">马上去购物</a>
      </div>
      <div  v-show="shopList.length" class="cart-goods-list">
        <!--购物车表头-->
        <div class="list-head clearfix">
            <div class="col col-check">
              <i class="iconfont icon-checkbox"
               @mousedown.prevent
              @click="toggleAllChecked"
                :class="{'icon-checkbox-selected': isCheckedAll}"
              >√</i>
              全选
              </div>
            <div class="col col-img">&nbsp;</div>
            <div class="col col-name">商品名称</div>
            <div class="col col-price">单价</div>
            <div class="col col-num">数量</div>
            <div class="col col-total">小计</div>
            <div class="col col-action">操作</div>
        </div>
        <!--购物车展示商品信息-->
        <div class="list-body">
          <shop-item-box 
            v-for="item in shopList"
            :key="item.skuId"
            :option="item"
          ></shop-item-box>
        </div>
      </div>
      <!--计算价钱的信息-->
      <shop-info  v-show="shopList.length"></shop-info>
    </div>
    <!-- <recommend></recommend> -->
  </div>
</template>
<script>
import ShopItemBox from './shopItemBox'
import ShopInfo from './shopInfo'
import recommend from './recommend'

import {getShopList} from '@/server/api'

export default {
 /*  data(){
    return {
      shopList:[]  // 数据是自己内部使用，放在data中
      this.$store.shopList
    }
  }, */
  data(){
    return {
      loading: true
    }
  },
  components: {
    ShopItemBox,
    ShopInfo,
    recommend
  },
  computed:{
    shopList(){
      return this.$store.state.shopList
    },
    isCheckedAll(){
      return this.shopList.every(item => item.checked)
    }
  },
  methods:{
    toggleAllChecked(){
      this.$store.commit('toggleAll',{
        checked: !this.isCheckedAll
      })
    }
  },
  async mounted() {
    // 这种方式 是这个接口只在这个组件内使用，放在这个组件中就可以了

    // 等到这个异步操作完成之后，在继续执行下面的代码
    
    /* let {data} = await getShopList();
    console.log(data)
   // this.shopList = data.list;
  console.log(data)
   this.$store.commit('changeShopList',{
     list: data.data.list
   }) */
    // dispatch的返回值是派发这个action函数的返回值

   this.$store.dispatch('getShopListAction',{userName:'momo'})
   .then(() => {
     this.loading = false;
   })//请求成功时执行的代码

  }
}
</script>
<style>
@import url('./css/font');
</style>

<style scoped>

.cart-empty {
    height: 273px;
    padding-left: 558px;
    margin: 65px 0 130px;
    background: url(https://s01.mifile.cn/i/cart/cart-empty.png) no-repeat 124px 0;
    color: #b0b0b0;
    overflow: hidden;
}
.btn-primary {
    background: #ff6700;
    border-color: #ff6700;
    color: #fff;
}
.cart-empty h2 {
    margin: 70px 0 15px;
    font-size: 36px;
}
.cart-empty .btn {
    width: 170px;
    height: 48px;
    line-height: 48px;
}

.shop-cart {
  width: 1300px;
  margin: 0px auto;
}
.cart-goods-list {
  background-color: #fff;
}
.list-head {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
  overflow: hidden;
}
.list-body {
  overflow: hidden;
}
.list-head .col {
  float: left;
}
.cart-goods-list .col-check {
  width: 110px;
}
.cart-goods-list .list-head .col-img {
  width: 120px;
}
.cart-goods-list .list-head .col {
  float: left;
}
.cart-goods-list .list-head .col-name {
  width: 380px;
}
.cart-goods-list .col-price {
  width: 75px;
  padding-right: 84px;
  text-align: right;
  color: #424242;
}
.cart-goods-list .col-num {
  width: 150px;
  text-align: center;
  color: #424242;
}
.cart-goods-list .col-total {
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.cart-goods-list .col-action {
  width: 80px;
  text-align: center;
}

</style>

