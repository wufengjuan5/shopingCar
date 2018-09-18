<template>
    		<div id="header">
			<div class="nav-global">
				<div class="container">
					<h1 class="nav-logo">
						<a href="/shop_list"></a>
					</h1>
					<smallCar />
					<!-- <navSub /> -->
					<ul class="nav-list">
						<router-link 
						v-for="item in navlist" 
						:to="{name:'shop_list',query:{id:item.id}}"
							tag="li" :key='item.id' 
						:class="{active:currentId==item.id}">
						<a href="">{{item.title}}</a>
						</router-link>
							 <li><a href="/shop_list">在线商城</a></li>
					</ul>
				</div>
			</div>
			<!-- <div class="nav-sub" v-show="show" >
				<div class="nav-sub-wrapper">
					<div class="container">
						<ul class="nav-list">
                            <router-link 
							v-for="item in navlist" 
							:to="{name:'shop_list',query:{id:item.id}}"
							 tag="li" :key='item.id' 
							:class="{active:currentId==item.id}">
							<a href="">{{item.title}}</a>
							</router-link>
						</ul>
					</div>
				</div>
			</div> -->
		</div>
</template>
<script>
import navlist from '@/router/navConfig.js'
import smallCar from './smallCar'
import navSub from './navSub'

export default {
    data(){
        return {
			navlist,
			currentId:62,
			noShow: ['/car','/checkout'],
			show:true
        }
	},
	components:{smallCar,navSub
	},
    watch:{
        $route:{
            handler(){
                let id=this.$route.query.id
				this.currentId=id
				console.log(this.currentId);
                let path=this.$route.path
				if(this.noShow.some(item=>item===path)){
					this.show=false
				}else{
					this.show=true
				}
            },
            immediate: true

        }
    }
}
</script>
