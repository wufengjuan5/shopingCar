<template>
  <div>
    <button>----</button>
    <span>data-{{num}}</span>
    <span>computed-{{mm}}</span>
    <button>++++</button>
  </div>
</template>
<script>
  export default {
    data(){
      // 只能在组件中更改，取出state作为data的初始值
      return {
        num: this.$store.state.n
      }
    },
    computed:{
      // 计算属性是依赖与外面的值，只要外面的只发生变化，计算属性重新计算
      mm(){
        return this.$store.state.n
      }
    }
  }
</script>
