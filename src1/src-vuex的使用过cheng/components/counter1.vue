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
      // 不能这样改，这跟改变一个对象没什么区别了，没有规则，不可预测
      //this.$store.state.n = 1000;

      // 在这里提交mutation
      this.$store.commit('changeN',{
        k:1
      })
    }
  }
}
</script>

