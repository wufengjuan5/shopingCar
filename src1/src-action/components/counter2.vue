<template>
  <div>
    <button>----</button>
    <span>data-{{num}}</span>
    <span>computed-{{mm}}</span>
    <button @click="add">++++</button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        num: this.$store.state.n
      }
    },
    computed:{
      mm(){
        return this.$store.state.n
      }
    },
    methods:{
      add(){
        /* this.$store.commit({
          type: 'changeN2',
          abc:10
        }) */
        // 派发一个action，做异步操作
        this.$store.dispatch('changeNAction',{
          aaa:10000
        })
      }
    }
  }
</script>
