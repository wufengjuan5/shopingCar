<template>
  <div id="app">
  <Menu 
    mode="vertical" 
    theme="light" 
    active-name="2"
    @on-select="selectHandle"
  >
      <MenuItem name="1">
          <Icon type="ios-paper" />
          全部
      </MenuItem>
      <MenuItem name="2">
          <Icon type="ios-people" />
          精华
      </MenuItem>
      <MenuItem name="3">
          <Icon type="ios-baseball" />
          工作
      </MenuItem>
  </Menu>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
