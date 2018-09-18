<template>
  <ul class="nav-aside" >
    <!--active-->
    <li class="nav-user">
      <a href="javascript:;">个人中心</a>
        <div class="nav-user-wrapper">
          <div class="nav-user-list">
            <dl class="nav-user-avatar">
              <dd><span class="ng-scope"></span></dd>
              <dt class="ng-binding">+86 138****9453</dt>
            </dl>
            <ul>
              <li class="order"><a href="javascript:;">我的订单</a></li>
              <li class="support"><a href="javascript:;">售后服务</a></li>
              <li class="coupon"><a href="javascript:;">我的优惠</a></li>
              <li class="information"><a href="javascript:;">账户资料</a></li>
              <li class="address"><a href="javascript:;">收货地址</a></li>
              <li class="logout"><a href="javascript:;">退出</a></li>
            </ul>
          </div>
        </div>
      <!--active-->
    </li>
    <li class="nav-cart" @mouseover="showCart" @mouseout="hideCart" v-show="isCarShow">
      <a href="/car">购物车</a>
      <!--根据class改变颜色-->
      <span :class="{'cart-empty-num':true, 'cart-num':shopCarList.length}" >
        <i>{{$store.getters.total02.totalBuyNumber}}</i>
      </span>
      <div class="nav-cart-wrapper"  :style="{'display':!show ? 'block':'none'}">
        <div class="nav-cart-list">
          <!--购物车为空提示-->
          <div class="empty" v-show="!shopCarList.length">
            <h3>购物车为空</h3>
            <p>您还没有选购任何商品，现在前往商城选购吧!</p>
          </div>
          <!--小购物车-->
          <div class="full" v-show="shopCarList.length">
            <div class="nav-cart-items">
              <ul>
                <router-link 
                  v-for="(item,index) in shopCarList"
                  :key="index"
                  class="clear"
                  @mouseover="currentIndex=index"
                  tag="li"
                  :to="{name:'item',params:{sku_id:$store.state.shopCarList[index].sku_id}}"
                >
                  <div class="cart-item js-cart-item cart-item-sell">
                    <div class="cart-item-inner">
                      <div class="item-thumb">
                        <img :src="item.ali_image">
                      </div>
                      <div class="item-desc">
                        <div class="cart-cell">
                          <h4>
                            <a href="#/item/100027401">{{item.title}}</a>
                          </h4>
                          <h6>
                            <span class="price-icon">¥</span><span class="price-num">{{item.price+'.00'}}</span><span class="item-num">x{{item.buyNumber}} </span>
                          </h6>
                        </div>
                      </div>
                      <div class="del-btn" @click="$store.commit('delcardata',index)
">删除</div>
                    </div>
                  </div>
                </router-link>
                
              </ul>
            </div>
            <div class="nav-cart-total">
              <p>共 <strong class="ng-binding">{{$store.getters.total02.totalBuyNumber}}</strong> 件商品</p>
              <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{$store.getters.total02.totalMoney}}</span></h5>
              <h6>
                <router-link to="/car" class="nav-cart-btn">去购物车</router-link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
  export default {
    computed:{
      shopCarList(){
        return this.$store.state.shopCarList
      },

    },
    data(){
      return {
        noShow: ['/car','/checkout'],
        show: false,
        currentIndex:0,
        isCarShow:true
      }
    },
    methods:{
      showCart(){
        this.show=false
      },
      hideCart(){
                console.log(this.show)
        this.show=true

      }
    },

    watch:{
      $route:{
        handler(){
          let path = this.$route.path;
          if(this.noShow.some(item=> item === path)){
            this.show = false; // 隐藏
            this.isCarShow=false
          }else{
             this.show = true; // 显示
             this.isCarShow = true; // 显示
          };          
        },
        immediate: true
      }
    },
    created() {
      // 那小购物车的数据
      let shopCarListLocalStorage = JSON.parse(localStorage.getItem('miaov-shop')) || {};
      let shopCarList = shopCarListLocalStorage.shopCarList || [];
      let ids = shopCarList.map((item) => {
        return item.sku_id;
      }).join(',');
      this.$store.dispatch('getShopCarListInfoAction',{
        ids:ids
      });
    }
  }
</script>
