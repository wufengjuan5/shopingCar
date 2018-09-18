<template>
  <section class="main">
      <input type="checkbox" class="toggle-all" v-model="isCheckedAll" />
      <ul class="todo-list">
          <todo-item 
          :key="item.id"
          v-for="item,index in $store.getters.listFilter" 
          :option="item"
          :editId="editId"
          @edit-id="editIdEventtttt"
          @enter-event="editEvent"
          @cancle-event="cancleEdit"
          ></todo-item>
      </ul>
  </section>
</template>
<script>
    import todoItem from './todo-item.vue'
    export default {
        data(){
        return {
            editId:null,
            beforeTitle:''
            }
        },
        components: {todoItem},
        computed:{
            isCheckedAll:{
                get(){
                    let thisValue=this.$store.getters.isCheckedAll
                  return  thisValue;
                },
                set(getValue){
                    this.$store.commit('checkedAll',getValue)
                }
            }
        },
        methods:{
            editIdEventtttt(id){
               this.editId=id
               console.log(this.editId)
            },
            editEvent(){
                this.editId=null;   
                console.log(this.editId)
            },
            cancleEdit(){
                this.editId=null;
            }
        }
    }
</script>
