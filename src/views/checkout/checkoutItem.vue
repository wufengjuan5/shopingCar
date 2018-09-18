<template>
        <div class="cart-items">
            <div class="items-thumb">  
                <a href="javascript:;" target="_blank"><img :src="option.ali_image"></a>  
            </div>
            <div class="name hide-row">
                <router-link class="name-cell"
                          :to="{'name':'item',params:{sku_id:option.sku_id}}"
                          tag="div"
                > 
                    <a href="javascript:;" title="" target="_blank">{{option.title}}</a>
                </router-link>
            </div>
            <div class="subtotal">
                <div class="subtotal-cell">  ¥ {{samegoodsPrice}}.00  </div> 
            </div>
            <div class="goods-num">{{option.buyNumber}}</div>
            <div class="price">¥ {{option.price}}.00</div>
    </div>
</template>
<script>
export default {
    props:{
        option:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    computed:{
        samegoodsPrice(){
            return this.option.price*this.option.buyNumber
        },
    },
}
</script>

