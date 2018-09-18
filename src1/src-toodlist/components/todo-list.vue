<template>
  <section class="main">
      <input class="toggle-all" type="checkbox" v-model="isCheckedAll" />
      <ul class="todo-list">
          <todo-item 
            :key="item.id" 
            v-for="item in list"
            :option="item"
            @remove-id='removeEvent'
            @edit-id="editIdEvent"
           :editid="editid"
           @change-titlevalue="changeListValue"
           @cancle="cancleEvent"
        ></todo-item>
      </ul>
  </section>
</template>
<script>
    import todoItem from './todo-item.vue'
    export default {
        props: {
            list: {
                type: Array,
                default(){
                    return []
                }
            },
            editid:{
                type:Number || null,
                default(){
                    return ''
                }
            }
        },
        components: {todoItem},
        computed:{
            isCheckedAll: {
                get(){
                    return this.list.every(item => item.checked)
                },
                set(newValue){
                    this.$emit('change-all-checked',newValue)
                }
            }
        },
        methods:{
            removeEvent(id){
                this.$emit('remove-list',id)
                console.log(id)
            },
            editIdEvent(id){
                this.$emit('edit-idevent',id)
                console.log(id)
            },
            changeListValue(id){
                this.$emit('change-listvalue',id)
            },
            cancleEvent(id){
                this.$emit('cancle-edit',id)
            }
        }
    }
</script>
