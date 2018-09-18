<template>
        <div id="pop" v-show="show">
        <div class="module-dialog-layer" style="display: block;"></div>
        <div class="module-dialog clear module-dialog-address module-dialog-show">
        <div class="dialog-panel">
            <div class="topbar">
                <div class="dialog-tit clear">
                    <h4 class="js-dialog-title">管理收货地址</h4>
                </div>
                <span class="dialog-close" @click="closeEvent">x</span>
            </div>
            <div class="dialog-con js-dialog-container">
                <div class="animate-layer">
                    <div class="dialog-inner js-address-add">
                        <div class="save-address-box">
                            <div class="address-form">
                                <div class="module-form-row">
                                    <div class="form-item-v3"
                                    :class="{'form-focus-item':focus1}"
                                    >
                                        <i v-show="!address.name">收货人姓名</i>
                                        <input type="text" 
                                        class="js-verify" 
                                        v-model="address.name" autofocus
                                        @blur="nameInput()"
                                        @focus="namefocus"
                                        >
                                        <div class="verify-error"
                                        :style="{'display':!errortip1?'block':'none'}"
                                        >请输入中文或英文</div>
                                    </div>
                                </div>
                                <div class="module-form-row">
                                    <div class="form-item-v3"
                                    :class="{'form-focus-item':focus2}"
                                    >
                                        <i v-show="!address.iphone">手机号</i>
                                        <input type="text" class="js-verify" 
                                        v-model="address.iphone"
                                        @blur="iphoneInput"
                                        @focus="inphonefocus"
                                        >
                                        <div class="verify-error"
                                        :style="{'display':!errortip2?'block':'none'}"
                                        >格式错误</div>
                                    </div>
                                </div>
                                <div class="module-form-row clear">
                                    <div class="form-item-v3 area-code-w fn-left form-valid-item"
                                    :class="{'form-focus-item':focus3}"
                                    >
                                        <i v-show="!address.quhao">区号（可选）</i>
                                        <input type="text" class="js-verify js-address-area-code"
                                         v-model="address.quhao"
                                         @blur="quhaoInput"
                                         @focus="quhaofocus"
                                         >
                                        <div class="verify-error" 
                                        :style="{'display':!errortip3?'block':'none'}"
                                        >格式错误</div>
                                    </div>
                                    <div class="form-item-v3 telephone-w fn-right form-valid-item"
                                    :class="{'form-focus-item':focus4}"
                                    >
                                        <i v-show="!address.guhua">固定电话（可选）</i>
                                        <input type="text" 
                                        class="js-verify js-address-telephone" 
                                        v-model="address.guhua"
                                        @blur="guhuaInput"
                                        @focus="guhuafocus"
                                        >
                                        <div class="verify-error"></div>
                                    </div>
                                </div>
                                 <div class="module-form-row clear">
                                     <v-distpicker  
                                        :province="select.province" 
                                        :city="select.city" 
                                        :area="select.area"
                                        @province="province"
                                        @city="city"
                                        @area="area"
                                    />
                                 </div>
                                <div class="module-form-row">
                                    <div class="form-item-v3"
                                    :class="{'form-focus-item':focus5}"
                                    >
                                        <i v-show="!address.detail">详细地址，如街道名称，楼层，门牌号码等</i>
                                        <input type="text" class="js-verify"  
                                        v-model="address.detail"
                                        @blur="detailInput"
                                        @focus="detailfocus"
                                        >
                                        <div class="verify-error"></div>
                                    </div>
                                </div>
                                <div class="module-form-row fn-clear" @click="defaultIcon">
                                    <input type="checkbox" class="hide " v-model="address.default"  >
                                    <span class="blue-checkbox" :class="{'blue-checkbox-on':!address.default}" 
                                    ></span>设为默认
                                </div>
                                <div class="dialog-blue-btn big-main-btn js-verify-address"
                                :class="{'disabled-btn':isDisabled}"
                                 @click="save">
                                    <a>保存</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>    
    </div>
</template>
<script>
export default {
    data(){
        return{
            address:{
                name:'',
                iphone:'13699207982',
                quhao:'',
                guhua:'',
                detail:'',
                default:true,
            },
            select: { province: '省', city: '市', area: '区' },
            errortip1:true,
            errortip2:true,
            errortip3:true,
            errortip4:true,
            errortip5:true,
            focus1:false,
            focus2:false,
            focus3:false,
            focus4:false,
            focus5:false,
            show:true,
            isDisabled:true
        }
    },
    watch:{
        address:{
            handler(){
                            console.log(this.address)

                this.disabled()
            },
            deep:true
        }
    },
    methods:{
        province(data){
            console.log(data)
            this.select.province=data.value
        },
        city(data){
            console.log(data)
            this.select.city=data.value
        },
        area(data){
            console.log(data)
            this.select.area=data.value
        },
        disabled(){
            let IsTrue=this.address.name&&this.address.iphone&&this.address.detail
            if(IsTrue){
                this.isDisabled=false
            }else{
                this.isDisabled=true
            }
                
        },
        save(){
            this.show=false
            this.$emit('change-address',this.show)
            console.log(this.select)
            this.$store.commit('addNewAddress',{address:this.address,select:this.select})
            this.address={
                name:'',
                iphone:'',
                quhao:'',
                guhua:'',
                detail:'',
                default:true,
            };
            this.select= { province: '省', city: '市', area: '区' }
            this.isDisabled=true
        },
        defaultIcon(){
            this.address.default=!this.address.default
            console.log(this.address.default)
        },
        nameInput(){
             this.focus1=false
            var  username= /^[\u4E00-\u9FA5A-Za-z]+$/;
           if( !username.test(this.address.name)){
               this.errortip1=false
               console.log(this.errortip1)
           }else{
               this.errortip1=true
           }
        },
        iphoneInput(){
            this.focus2=false
            var iphone=/^1[3,4,5,7,8,9]\d{9}$/
            if(!iphone.test(this.address.iphone)&&this.address.iphone!==''){
                this.errortip2=false
            }else{
               this.errortip2=true
           }
        },
        quhaoInput(){
            this.focus3=false
            var quhao=/(^0?[0-9]{2,3}$)/
            if(!quhao.test(this.address.quhao)&&this.address.quhao!==''){
                this.errortip3=false
            }else{
               this.errortip3=true
           }
        },
        guhuaInput(){
            this.focus4=false
            var guhua=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
            if(!guhua.test(this.address.guhua)&&this.address.guhua!==''){
                this.errortip4=false
            }else{
               this.errortip4=true
           }
        },
        detailInput(){
            this.focus5=false
            if(this.address.detail!==''){
                this.errortip5=false
            }else{
                 this.errortip5=true
            }
        },
        closeEvent(){
            this.show=false
            this.$emit('change-address',this.show);
            this.address={
                name:'',
                iphone:'',
                quhao:'',
                guhua:'',
                detail:'',
                default:true,
            };
            this.select= { province: '省', city: '市', area: '区' }

        },
        namefocus(){
            this.focus1=true
        },
        inphonefocus(){
            this.focus2=true
        },
        quhaofocus(){
            this.focus3=true
        },
        guhuafocus(){
            this.focus4=true
        },
        detailfocus(){
            this.focus5=true
        }
    },
    created() {
              let shopCarListLocalStorage = JSON.parse(localStorage.getItem('miaov-shop')) || {};
      let addAddress = shopCarListLocalStorage.addAddress || [];
console.log(addAddress)
      this.$store.dispatch('getAddressAction');
    }
}
</script>

<style>
    .distpicker-address-wrapper select{
        width: 100%;
        height: 46px;
        padding: 0;
        margin-bottom: 15px;
        border-radius: 6px;
        border: 1px solid #CCC;
        background: #fff linear-gradient(#fafafa,#f5f5f5);        
    }
    .distpicker-address-wrapper select:nth-of-type(2){
        width: 48%;
        float: left;
    }
    .distpicker-address-wrapper select:nth-of-type(3){
        width:  48%;
          float: right;

    }
    #pop .address-form .form-item-v3 input{
        width: 224px;
    }
    #pop .address-form .form-item-v3 input{
        width: 103px;
    }
#pop .module-form-row .form-item-v3 i{
    z-index: -1;
}
#pop .address-form .form-item-v3 input{
    width: 100%;
}
#pop .big-main-btn a{
    margin: 0 auto;
}
</style>
