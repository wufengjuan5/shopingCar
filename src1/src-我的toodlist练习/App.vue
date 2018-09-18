<template>
  <section class="todoapp">
    <todo-header></todo-header>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </section>
</template>

<script>
import todoHeader from './components/todo-header'
import todoList from './components/todo-list'
import todoFooter from './components/todo-footer'
// localStorage.getItem()

export default {
  name: 'App',
  components: {todoHeader,todoList,todoFooter},
  watch:{
    '$store.state.list':{
        handler(){
            localStorage.setItem('miaov',JSON.stringify(this.$store.state.list))
        }
    },
    deep:true
  }
}
</script>

