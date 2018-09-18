<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{unchecked}}</strong>
      <span>条未选中</span>
    </span>
    <ul class="filters">
      <li><a href="#/all" :class="{selected:hash=='all'}">All</a></li> 
      <li><a href="#/active" :class="{selected:hash=='active'}">Active</a></li> 
      <li><a href="#/completed" :class="{selected:hash=='completed'}">Completed</a></li>
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
      hash:{
        type:String,
        default(){
          return ''
        }
      }
    },
    computed:{
      unchecked(){
        return this.list.filter(item=>!item.checked).length
      }
    }
  }
</script>
