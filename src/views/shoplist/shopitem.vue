<template>
    <div class="item">
    <div class="item-img">
        <img :alt="showData.title"
         :src="showData.ali_image"
        v-lazy="showData.ali_image"
         >
    </div>
    <h6>{{showData.title}}</h6>
    <h3>{{showData.sub_title}}</h3>
    <div class="params-colors">
        <ul class="colors-list">
            <li 
            v-for="(item,index) in images"
             :key="index"
             @mouseover="currentIndex=index"
             >
                <span :class="{active: index === currentIndex}">
                <img :src="item">
                </span>
            </li>
        </ul>
    </div>
    <div class="item-btns clearfix">
        <span class="item-gray-btn" >
            <!-- <a href="javascript:;" target="_blank">查看详情</a>  -->
            <router-link :to="{name:'item',params:{sku_id:showData.sku_id}}"
             >查看详情</router-link> 
        </span>
        <span class="item-blue-btn" @click="addCar">加入购物车 </span>
    </div>
    <div class="item-price clearfix">
        <i>¥</i><span>{{showData.price}}</span>
    </div>
    <div class="discount-icon">false</div>
    <div class="item-cover">
        <router-link  :to="{name:'item',params:{sku_id:showData.sku_id}}"></router-link>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        option:{
            type:Object,
            default(){return {}}
        }
    },
    computed:{
        showData(){
            return this.option.sku_list[this.currentIndex]
        },
        images(){
            return this.option.sku_list.map(item=>{
                return item.image
            })
        },
        ids(){
            return this.option.sku_list.map(item=>{
                return item.sku_id
            })
        }
    },
    // created(){
    //     console.log(this.option);
    //     console.log(this.showData);
    // },
    methods:{
        addCar(){
           this.$store.commit('addShopCarList', {
          shop: this.showData,
          number:1
        })
        }
    }
}
</script>
