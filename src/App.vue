
<template>
    <div id="app">
    <Heads></Heads>
    <router-view name="Carousel"/>
    <router-view/>
  </div>

</template>

<script>

import {getshoplist} from './server'
import Heads from '@/components/header/header'

export default {
  name: 'App',
  components:{Heads},
  methods:{
    selectHandle(name){
      console.log('点击l',name)
    }
  }

}
</script>
<style>
  #app{
    background: #ededed
  }
</style>


