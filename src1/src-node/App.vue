<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

//import {getTopics} from './server'

export default {
  name: 'App',
  created() {
    
  },
  methods:{
    selectHandle(name){
      console.log('点击l',name)
    }
  }
}
</script>

<style>


</style>
