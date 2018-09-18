<template>
  <div class="cart-items">
    <div class="items-choose">
      <span :class="{'blue-checkbox-new':true, 'checkbox-on':option.checked}"
      @click="checkboxOne"
      ><a></a></span>
    </div>
    <div class="items-thumb">
      <img :src="option.ali_image">
      <a href="javascript:;" target="_blank"></a>
    </div>
    <div class="name hide-row" >
      <div class="name-table">
        <router-link 
                  tag="a"
          :to="{'name':'item',params:{sku_id:option.sku_id}}"

         >
          {{option.title}}
        </router-link>
        <ul class="attribute">
          <li>{{option.sub_title}}</li>
        </ul>
      </div>
    </div>
    <div class="operation">
      <a class="items-delete-btn" @click="delCarData"></a>
    </div>
    <div class="subtotal">¥ {{samegoodsPrice}}</div>
    <div class="item-cols-num">
      <div class="select js-select-quantity">
        <span :class="{'down':true,'button disabled':option.buyNumber==1?true:false}" @click="reduceNumber()" >-</span>
        <span class="num">{{option.buyNumber}}</span>
        <span class="up" @click="addNumber()">+</span>
        
      </div>
    </div>
    <div class="price">¥ {{option.price}}</div>
  </div>
</template>
<script>
  export default {
    props:{
      option: Object,
      default(){
        return {}
      }
    },
    methods:{
      addNumber(){//添加数量
        console.log(this.option)
        this.$store.commit('addShopCaritem',this.option)
      },
      reduceNumber(){//减少数量
        this.$store.commit('reduceShopCaritem',this.option)
      },
      delCarData(){//删除
        this.$store.commit('delDataOnegoods',this.option)
      },
      checkboxOne(){
        this.$store.commit('checkOneBox',this.option)
      }
    },
    computed:{
      samegoodsPrice(){
        console.log(this.option.price*this.option.buyNumber)
        return this.option.price*this.option.buyNumber
      }
    },
    created(){
      console.log(this.option.buyNumber)
    }
  }
</script>