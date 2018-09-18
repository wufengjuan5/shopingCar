<template>
	<div>
		<h2>消息页面</h2>
		<div class="content">
			<div class="left-slider">
				<ul class="watch-list">
					<router-link class="active" 
					v-for="item in messagechilds" 
					:key="item.path"
					:to="{name:item.name}" 
					tag="li" >
						<span>{{item.title}}</span>
					</router-link>
				</ul>
			</div>
			<div class="right-slider">
				<h3>展示页</h3>
				<router-view></router-view>
			</div>
		</div>
	</div> 
</template>
<script>
 import messagechilds from '@/router/message-child'
 export default{
	 data(){
		 return{
			 messagechilds,
		 }
	 }
 }
</script>