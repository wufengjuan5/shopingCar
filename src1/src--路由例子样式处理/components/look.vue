<template>
<div>
  <h2>关注页面</h2>
  <div class="content">
    <div class="left-slider">
      <ul class="watch-list">
        <!-- <li class="active" 
          v-for="item in list" 
          :key="item.id"
        >
          <img :src="item.imgUrl"/>
          <span>{{item.title}}</span>
        </li> -->
        <!-- :to="{name:'Look',params: {id: item.id}}" -->
        <router-link
          v-for="item in list" 
          :key="item.id"
          tag="li"
          :to="{path:`/look/${item.id}`,}"
          active-class="look-jihuo"
          exact-active-class="look-jingque-jihuo"
        >
          <img :src="item.imgUrl"/>
          <span>{{item.title}}</span>
        </router-link>
        <!-- <li class="active" 
          v-for="item in list" 
          :key="item.id"
          @click="gotoLook(item)"
        >
          <img :src="item.imgUrl"/>
          <span>{{item.title}}</span>
        </li> -->
      </ul>
    </div>
    <div class="right-slider">
      <h3>展示页</h3>

      <div>
        <p>姓名：{{info.name}}</p>
        <p>年龄：{{info.age}}</p>
      </div>

    </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios'
  let url = `https://www.easy-mock.com/mock/5b4026faf38b6529a0d572a3/jianshu/look`
  export default {
    data(){
      return {
        list:[],
        info:{
          name: 'XXXX',
          age: 'XXXX'
        }
      }
    },
    watch:{
      $route(){
        let id = this.$route.params.id;
        if(id){
          this.info = this.list.find(item => item.id == id).info;
        }
      }
    },
    async mounted() {
      let {data} = await axios.get(url);
      this.list = data.data.list;
      let id = this.$route.params.id;
      if(id){
        this.info = this.list.find(item => item.id == id).info;
      }
      
    },
    methods:{
      gotoLook(item){
        this.$router.push({
          name: 'Look',
          params:{id:item.id}
        })
      }
    }
  }
</script>
<style>
.watch-list .look-jingque-jihuo  {
  background: green;
}
</style>

