<template>
        <div class="sku-box store-content">
        <div class="sort-option" style="display: none;">
            <ul class="line clear">
                <li><a href="javascript:;" class="active">综合排序</a></li>
                <li><a href="javascript:;" class="">销量排序</a></li>
                <li><a href="javascript:;" class="">价格低到高</a></li>
                <li><a href="javascript:;" class="">价格高到低</a></li>
            </ul>
        </div>
        <div class="gray-box">
            <div class="item-box">
                 <shopItem v-for="item in list" :key="item.id"  :option="item"></shopItem>   
            </div>
        </div>
    </div>
</template>
<script>
import shopItem from '@/views/shoplist/shopitem'
import carousel from '@/views/shoplist/carousel'

export default {
  data(){
      return {
          list:[]
      }
  },
  components:{
      shopItem,
      carousel
    },

  watch:{
    //   $route:'getData'
    $route(){
       this.getData()
    }
  },
   methods:{
     async getData(){
         let id=this.$route.query.id;
         if(!id){
             id=62
             this.$router.push({
                 query:{id}
             })
         }
         console.log(id)
        let {data}=await this.$api.getshoplist({id});
    console.log(data);
        this.list=data.data.list;
        console.log(this.list)
       }
  },
  created(){
    this.getData()
  }

}
</script>

