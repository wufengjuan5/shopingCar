<template>
  <div class="store-content hander-car">
				<div class="cart-box">
					<div class="title">
						<h2>购物清单</h2>
					</div>
					<div class="cart-inner">
						<!--没有购物提醒-->
						<div class="empty-label hide">
							<h3>您的购物车中还没有商品</h3>
							<a class="link" href="javascript:;">现在选购</a>
						</div>
						<!--没有购物车-->
						<div>
							<div class="cart-table-title">
								<span class="name">商品信息</span>
								<span class="operation">操作</span>
								<span class="subtotal">小计</span>
								<span class="num">数量</span>
								<span class="price">单价</span>
							</div>
							<div class="cart-table">
								<div class="cart-group">
									<!--购物列表-->
									<div class="cart-top-items">
										<car-item 
											v-for="(item,index) in shopCarList"
											:key="index"
											:option="item"
										></car-item>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="cart-bottom-bg fix-bottom fix-bottom-fixed">
						<div class="cart-bar-operation">
							<div>
								<div class="choose-all js-choose-all">
									<span :class="{'blue-checkbox-new':true,' checkbox-on':$store.getters.checkedboxAll}" 
									@click="checkboxAll"
									><a></a></span>
									全选
								</div>
								<div class="delete-choose-goods" @click="delChecked">删除选中的商品</div>
							</div>
						</div>
						<div class="shipping">
							<div class="shipping-box">
								<div class="shipping-total shipping-num">
									<h4 :class="{'highlight':checkeds}">
										已选择 <i>{{checkedGoods.buyNumber}}</i> 件商品
									</h4>
									<h5>
										共计 <i >{{$store.getters.total02.totalBuyNumber}}</i> 件商品
									</h5>
								</div>
								<div class="shipping-total shipping-price">
									<h4 :class="{'highlight':checkeds}">
										应付总额：<span>￥</span><i>{{$store.getters.total.totalMoney}}</i> 
									</h4>
									<h5 class="shipping-tips">
										应付总额不含运费
									</h5>
									
								</div>
							</div>
							<router-link 
							:class="{'jianguo-blue-main-btn big-main-btn js-checkout':true,'disabled-btn':!checkeds}"
							tag="span"
							:to="{name:'checkout'}"
							>
								<a href="javascript:;">现在结算</a>
							</router-link>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
import CarItem from './carItem'
	export default {
		data(){
			return{
				allChecked:true
			}
		},
		computed:{
			shopCarList(){
				return this.$store.state.shopCarList
			},
			checkeds(){
				 let checkeds=this.$store.state.shopCarList.filter(item=>item.checked)
				 return checkeds.length
			},
			checkedGoods(){//选中的个数
				 let checkeds=this.$store.state.shopCarList.filter(item=>item.checked)
				 console.log(checkeds)
				return checkeds.reduce((item1,item2)=>{
					return {'buyNumber':item1.buyNumber+item2.buyNumber}
				},{
					'buyNumber':0
				})
			}
		},
		components:{CarItem},
		created(){
			console.log(this.$store.state.shopCarList)
		},
		methods:{
			checkboxAll(){//全选
			this.allChecked=!this.$store.state.shopCarList.every(item=>item.checked)
				this.$store.commit('checkAllBox',this.allChecked)
			},
			delChecked(){//删除选中的商品
			let checkedShopCarList=this.$store.state.shopCarList.filter(item=>!item.checked)
			this.$store.state.shopCarList=checkedShopCarList
			}
		}
	}
</script>
<style>
@import url('./car.css');
</style>
