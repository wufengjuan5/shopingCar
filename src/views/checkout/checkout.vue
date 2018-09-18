<template>
		<div id="main">
			<div class="content page-order-checkout checkout">
				<div class="js-checkout-address-box">
					<div class="gray-box clear">
						<div class="title columns-title pre-title">
							<h2>收货信息</h2>
						</div>
						<div class="box-inner js-checkout-address-panel ">
							<div class="address-common-table js-multiple-address-panel">
								<ul class="address-item-list clear js-address-item-list">
									<li class="js-choose-address  selected-address-item"
									 v-show="$store.state.addAddress"
									 v-for="(item,index) in $store.state.addAddress"
									 :key="index"
									>
										<div class="address-item">
											<div class="name-section">  {{item.name}} </div>
											<div class="mobile-section"> {{item.iphone}}</div>
											<div class="detail-section"> {{item.detail}}</div>
										</div>
										<div class="operation-section">
											<span class="update-btn js-edit-address"
											@click="update(index)"
											>修改</span>
											<span class="delete-btn js-delete-address"
											@click="deletes(index)"
											>删除</span>
										</div>
									</li>
									<li class="add-address-item js-add-address"
									@click="addAddress"
									>
										<p>使用新地址</p>
									</li>
								</ul>
							</div>
						</div>
						<AdressPop v-if="addNew" @change-address="newAddress"/>
					</div>
				</div>
				<div class="gray-box">
					<div class="title">
						<h2>发票信息</h2>
					</div>
					<div class="box-inner invoice-box js-invoice-box"> 
						<p class="invoice-detail"> 发票类型：电子发票 </p> 
						<div class="invoice-detail"> 发票抬头： 
							<div class="radio-box"> 
								<label> 
									<input type="radio" class="hide"> 
									<span class="blue-radio" 
                                    :class="{'blue-radio-on':checked1}"
                                    @click="radioClick1"
                                    ><a></a></span>  个人
								</label> 
								<label> 
									<input type="radio" class="hide"> 
									<span class="blue-radio" 
                                    :class="{'blue-radio-on':checked2}"
                                     @click="radioClick2"
                                    ><a></a></span>  单位
								</label> 
							</div> 
							<div class="module-form-row form-item fn-hide js-invoice-title"> 
								<div class="module-form-item-wrapper no-icon small-item"
                                    v-show="checked2"
                                > 
									<i>请填写公司发票抬头</i> 
									<input type="text" class="js-verify"> 
								</div> 
							</div> 
						</div> 
						<p class="invoice-detail">发票内容：购买商品明细</p> <p class="invoice-label"> 电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。 </p>
					</div>
				</div>
				<div class="gray-box">
					<div class="title pre-title">
						<h2>购物清单</h2> 
					</div>
					<div class="box-inner ui-goods-cart">
						<div class="gray-sub-title cart-table-title"> 
							<span class="name">商品名称</span> 
							<span class="subtotal">小计</span> 
							<span class="num">数量</span> 
							<span class="price">单价</span> 
						</div>
						<div class="cart-table">
							<div class="cart-group js-cart-group">
                                <checkout-item 
                                v-for="item in checkedShopCarList"
                                :key="item.sku_id"
                                :option='item'
                                />
							</div>
						</div>
						
					</div>
					<div class="box-inner"> 
						<div class="order-discount-line"> 
							<p> 商品总计： <span>¥ {{$store.getters.total.totalMoney}}.00</span> </p> 
							<p> 运费： <span>+ ¥ 0.00</span> </p>  
							<p class="discount-line js-discount-cash"> <em>现金券</em>： <span> - 0 </span> </p>  
						</div> 
					</div>
					<div class="box-inner"> 
						<router-link class="last-payment clear"
							:to="{path:'/payment'}"
							tag="div"
						> 
							<span class="jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout"> <a>提交订单</a> </span> <span class="prices fn-right">应付金额： <em>¥ {{$store.getters.total.totalMoney}}   .00</em></span> 
						</router-link> 
					</div>
				</div>
			</div>
		</div>
</template>
<script>
import CheckoutItem from './checkoutItem'
import AdressPop from './adress_pop'
export default {
    data(){
        return{
            checked1:true,
			checked2:false,
			show:true,
			addNew:false
        }
    },
    components:{CheckoutItem,AdressPop},
    computed:{
         checkedShopCarList(){
            let checkedShopCarList=this.$store.state.shopCarList.filter(item=>item.checked)
            return checkedShopCarList
		},
		addressData(){
			return this.$store.state.addAddress
		}
		
	},

    methods:{
        radioClick1(){
            this.checked1=!this.checked1
             this.checked2=!this.checked2

        },
        radioClick2(){
            this.checked2=!this.checked2
            this.checked1=!this.checked1
		},
		addAddress(){
			this.addNew=true
		},
		newAddress(e){
			this.addNew=e
		},
		update(index){
			this.addNew=true
			this.$store.commit('updateAddress',index)
		},
		deletes(index){
			this.$store.commit('deleteAddress',index)
		}
	},
	created(){
    //   let addressLocalStorage = JSON.parse(localStorage.getItem('miaov-shop')) || {};
    //   let addAddress = addressLocalStorage.addAddress || [];
        
    }
}
</script>
<style>
    .js-checkout-address-box{
        padding-top: 40px;
    }
</style>
