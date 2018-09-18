<template>
  <section class="todoapp">
    <counter1></counter1>
    <hr>
    <counter2></counter2>
  </section>
</template>

<script>
import counter1 from './components/counter1'
import counter2 from './components/counter2'
export default {
  name: 'App',
  components: {counter1,counter2}
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
