<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{unchecked}}</strong>
      <span>条未选中</span>
    </span>
    <ul class="filters">
      <li><a href="#/all" :class="{selected:$store.state.hash=='all'}">All</a></li> 
      <li><a href="#/active" :class="{selected:$store.state.hash=='active'}">Active</a></li> 
      <li><a href="#/completed" :class="{selected:$store.state.hash=='completed'}">Completed</a></li>
    </ul>
  </footer>
</template>
<script>
  export default {
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      },
    },
    computed:{
      unchecked(){
        return this.$store.getters.unChecked
      }
    },
    methods:{
      getHash(){
        let hash=window.location.hash;
        let valueHash='all';
        if(hash){
          valueHash=hash.slice(2)
        }
        this.$store.commit('changeHash',{
          hash:valueHash
        })
      }
    },
    mounted(){
      this.getHash();
      window.addEventListener('hashchange',this.getHash)
    }
  }
</script>
