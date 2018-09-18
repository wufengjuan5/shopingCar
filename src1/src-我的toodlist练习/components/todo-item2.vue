<template>

  <li :class="{completed:option.checked}">
      <div class="view">
          <input class="toggle" type="checkbox"  @change="changeOne"/>
          <label>{{option.title}}</label>
          <button class="destroy" ></button>
      </div>
      <input class="edit" />
  </li>
</template>
<script>
/* completed editing */
/* 
  v-model="option.checked" 
    option 是一个传过来的props，option是个对象，option的值的是不能改的
    是可以改option属性的值

    改值的时候没有设置规则，也没有log日志，操作的步骤比较过，最终数据会很凌乱的改变
*/
  export default {
    props:{
      option:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      changeOne(e){
        this.$store.commit('changeoneCheckbox',{
          id:this.option.id,
          checked: e.target.checked
        })
      }
    }
  }
</script>
