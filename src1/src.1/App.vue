<template>
  <div id="main">
			<div class="header-box">
				<ul class="nav-list">
					<router-link 
          tag="li" 
          :exact="item.name==='Find' ? true : false"
          :key="item.path"
          v-for="item in routerConfig"
          :to="get(item)"
          >
						<a href="">{{item.title}}</a>
					</router-link>
				</ul>
			</div>
			<div class="container">
				<router-view></router-view>
			</div>
		</div>
</template>

<script>
import { routerConfig} from '@/router/routerConfig'
export default {
  name: 'App',
  data(){
    return {
      routerConfig
    }
  },
  methods:{
    get(item){
      return {name:item.name?item.name:item.children[0].name}
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
