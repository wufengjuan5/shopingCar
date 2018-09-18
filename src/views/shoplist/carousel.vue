<template>
    <div class="main-carousel" v-show="show">
        <Carousel autoplay v-model="value2" loop>
            <CarouselItem>
                <div class="demo-carousel"><img src="../../assets/img/lunbo/823shoujaio1.png" alt=""></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><img src="../../assets/img/lunbo/2018081801.png" alt=""></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><img src="../../assets/img/lunbo/20180824244011081.png" alt=""></div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
import 'iview/dist/styles/iview.css'

    export default {
        data () {
            return {
                value2: 0,
                show:true,
                isShow:62
            }
        },
        watch:{
            $route:{
                handler(){
                let id = this.$route.query.id;
                console.log(typeof(id))
                    if(id){
                        if(this.isShow ==id){
                            this.show = true; // 隐藏
                        }else{
                            this.show = false; // 显示
                        };
                    }          
                },
                immediate: true
            }
        },

    }
</script>
<style>
    .main-carousel{
       border-radius: 8px;
    }
    .ivu-carousel-list{
        width: 1220px;
         height: 500px;
        margin: 0 auto 25px;
        border-radius: 8px;
        border: 1px solid rgba(0,0,0,.14);
    }
    .demo-carousel img{
        position: relative;
        top: -30px;
        width: 100%;
    }
    .ivu-carousel-dots li button{
        height: 10px;
        width: 36px;
        transition:all .5s
    }
    .ivu-carousel-dots-inside{
        bottom: 30px;
    }
    .ivu-carousel-arrow.left{
        display: none;
    }
    .ivu-carousel-arrow.right{
        display: none;
    }
</style>


