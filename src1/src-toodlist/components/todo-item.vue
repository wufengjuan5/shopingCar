<template>

  <li :class="{completed: option.checked, editing:editid == option.id}">
      <div class="view">
          <input v-model="option.checked" class="toggle" type="checkbox" />
          <label @dblclick="edit">{{option.title}}</label>
          <button class="destroy" @click="remove"></button>
      </div>
      <input class="edit" 
            v-model="option.title" 
            ref="inputBtn" 
            @keydown.13="changetitlevalue"
            @keydown.esc="unback"
            @blur="changetitlevalue"
       />
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
    props: {
      option: {
        type: Object,
        default:() => ({})
      },
      list:{
        type:Array,
        default(){
          return []
        }
      },
      editid:{
        type:Number || null,

      },

    },
    methods:{
      remove(){
        this.$emit('remove-id',this.option.id)
        console.log(this.option.id)
      },
      edit(){
        this.$emit('edit-id',this.option.id);
        console.log(this.option.id)
        console.log(this.editid)
        console.log(this.option.id==this.editid);
        this.$nextTick(()=>{
          console.log(this.$refs.inputBtn)
          this.$refs.inputBtn.focus();
        })
      },
      changetitlevalue(){
       this.$emit('change-titlevalue',this.option.id)
      },
      unback(){
        this.$emit('cancle',this.option.id)
      }
    }
  }
</script>
