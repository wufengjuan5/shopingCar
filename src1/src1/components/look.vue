<template>
	<div>
		<h2>关注页面</h2>
		<div class="content">
			<div class="left-slider">
				<ul class="watch-list">
					<router-link class="active" 
						:key="item.id"
						v-for="item in list"
						:to="{path:`/look/${item.id}`}"
						tag="li"
					>
						<img :src="item.imgUrl"/>
						<span>{{item.title}}</span>
					</router-link>
				</ul>
			</div>
			<div class="right-slider">
				<h3>展示页</h3>
				<div>身高:{{info.height}}</div>
				<div>年龄:{{info.age}}</div>
				<div>年龄:{{info.name}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				list:[],
				info:{
					height:'XXX',
					age:'XXX',
					name:'XXX'
				}
			}
		},
		watch:{
			$route:{
				handler(){
					let id=this.$route.params.id;
					if(id){
						this.info=this.list.find(item=>item.id==id).info
						console.log(this.info)
					}
				},
			}
		},
		methods:{
			pushId(item){
				this.$router.push({
					name:'Look',
					params:{
						id:item.id
					}
				})
			}
		},
		async mounted(){
			let url=`https://www.easy-mock.com/mock/5b4026faf38b6529a0d572a3/jianshu/look`
			let {data}=await axios.get(url)
			console.log(data)
				this.list=data.data.list
				console.log(this.list)
		}
	}
</script>