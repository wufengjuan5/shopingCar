<template>
  <div id="app">
    <button @click="testPush">跳转到指定的路由--push</button>
    <button @click="testReplace">跳转到指定的路由--replace</button>
    <button @click="testGo">跳转到指定的路由--go</button>
    <h1>在这里渲染视图</h1>
    <hr>
    <ul>
      <li>
        <router-link tag="p" to="/?c=10">home</router-link>
      </li>
      <li>
        <router-link :to='{path: "/about",query:{a:1,b:2}}'>about</router-link>
      </li>
      <li>
        <router-link :to='{name:"Message"}'>message</router-link>
      </li>
      <li>
        <router-link :to='{name:"Singer"}'>Singer</router-link>
        <!-- <ul>
          <li>
           <router-link to="/singer/info"> 歌手信息</router-link>
          </li>
           <li>
            歌手歌曲
          </li>
        </ul> -->
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    testPush(){
      // 调用路由方法跳转链接
      //this.$router.push('/about')
      /* this.$router.push({
        path: '/about'
      }) */
      this.$router.push({
        name: 'About'
      })
    },
    testReplace(){
      this.$router.replace({
        name: 'Singer'
      })
    },
    testGo(){
      this.$router.go(-1)
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
