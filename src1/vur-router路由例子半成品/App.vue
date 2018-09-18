<template>
  <div id="main">
    <div class="header-box">
				<ul class="nav-list">
          <router-link 
            tag="li"
            v-for="item in routerConfig" 
            :key="item.path"
            :to="{name: item.name}"
          >
            <a>{{item.title}}</a>
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
