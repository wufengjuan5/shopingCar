<template>
  <div id='app'>
    <h1>渲染视图</h1>
    <p @click='testpush'>跳转到指定的路由</p>
    <p @click='testreplace'>替换到指定的路由</p>
    <p @click='testgo'>后退路由</p>

    <hr/>
        <router-link to="/?a=1&b=2">home</router-link><br>
        <router-link :to="{name:'about'}">about</router-link><br>
        <router-link :to="{name:'message'}">message</router-link><br>
        <router-link :to="{name:'singer'}">singer</router-link><br>
        <router-link :to="{name:'Use'}">user</router-link><br>
        <router-view></router-view>
  </div>
</template>
<script>
  export default{
    methods:{
      testpush(){
        this.$router.push('/')
      },
      testreplace(){
      this.$router.replace('/about')
      },
      testgo(){
      this.$router.go(-2)
      },
    },
  }
</script>


