<template>
  <div>
    <button>----</button>
    <span>{{$store.state.n}}</span>
    <button @click="add">++++</button>
  </div>
</template>
<script>
export default {
  methods:{
    add(){
      this.$store.commit('changeN',{
        abc:1000
      })
    }
  }
}
</script>

