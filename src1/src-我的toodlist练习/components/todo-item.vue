<template>

  <li :class="{completed:option.checked,editing:editId==option.id}">
      <div class="view">
          <input  class="toggle" type="checkbox" :checked="option.checked" @change="changeOne" />
          <label @dblclick="edit">{{option.title}}</label>
          <button class="destroy" @click="remove"></button>
      </div>
      <input ref="input" class="edit" v-model="option.title" @keydown.13="enterEvent" @blur="enterEvent" @keydown.esc="cancle" />
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
      },
      editId:{
        type:null || Number,
        //如果是一个对象必须用函数的形式表达
      }
    },
    methods:{
      changeOne(e){
        this.$store.commit('changeoneCheckbox',{
          id:this.option.id,
          checked: e.target.checked
        })
      },
      remove(){
        this.$store.commit('removeId',this.option.id)
      },
      edit(){
        this.$emit('edit-id',this.option.id)
        this.$nextTick(()=>{
          this.$refs.input.focus();
          this.$store.commit('changeBeforeTitle',this.option.title)
          console.log(this.option.title)
        });
        
        console.log(this.$refs.input)
      },
      enterEvent(){
        this.$emit('enter-event',this.option);
         this.$store.commit('editEvent',this.option)

      },
      cancle(){
        this.$emit('cancle-event')
        this.$store.commit('cancleEvent',this.option);
        console.log(this.option.title)
      }
    }
  }
</script>
