<template>
  <section class="todoapp">
    <todo-header @add-todo="addTodo"></todo-header>
    <todo-list
      v-show="list.length"
      :list="filterList"
      @change-all-checked="changeAllChecked"
      @remove-list="removeListparent"
      @edit-idevent="editIdEventParent"
      :editid=editId
      @change-listvalue="changeListvalue"
      @cancle-edit="cancleEditEvent"
    ></todo-list>
    <todo-footer :hash="hash"  v-show="list.length" :list="filterList"></todo-footer>
  </section>
</template>

<script>
import todoHeader from './components/todo-header'
import todoList from './components/todo-list'
import todoFooter from './components/todo-footer'
// localStorage.getItem()
let list =JSON.parse(localStorage.getItem('2018-8-9')) ||[]

export default {
  name: 'App',
  data(){
    return {
      list,
      hash: '',
      editId:null,
      beforeTitle:''
    }
  },
  watch:{
    list:{
      handler(){
        localStorage.setItem('2018-8-9',JSON.stringify(this.list))
      },
      deep:true
    }
  },
  components: {todoHeader,todoList,todoFooter},
  computed:{
    filterList(){
      if(this.hash === 'all') {
        return this.list;
      }else if(this.hash === 'active'){
         return this.list.filter(item => !item.checked);
      }else{
         return this.list.filter(item => item.checked);
      }
    }
  },
  methods: {
    changeAllChecked(bl){
      this.list.forEach(item  => item.checked = bl);
    },
    addTodo(title){
      this.list.push({
        id: Date.now(),
        checked: false,
        title
      })
    },
    getHash(){
      let hash = window.location.hash;
      let hashValue ='all';
      if(hash){
        hashValue = hash.slice(2)
      }
      // 判断值在不在范围内

      // this -> 当前组件的实例
      this.hash = hashValue;
    },
    removeListparent(id){
      console.log(this.list)
      let index=this.list.findIndex(item=>item.id==id)
        console.log(index)
      if(index!==-1){
        this.list.splice(index,1)
        console.log(this.list)
      }
    },
    editIdEventParent(id){

      this.editId=id
      console.log(this.editId)
        let item= this.list.find(item=>item.id==id);
    this.beforeTitle=item.title

    },
    changeListvalue(id){//编辑完成
      this.editId=null;
      let item= this.list.find(item=>item.id==id);
        if(item.title.trim()==''){
          this.removeListparent(id)
        };
    },
    cancleEditEvent(id){
     let index= this.list.findIndex(item=>item.id==id);
     console.log(this.beforeTitle)
        this.list[index].title=this.beforeTitle;
        this.editId=null
    }
  },
  mounted() {
    console.log('在这里获取元素，绑定事件')
    console.log('挂载在DOM上完成')

    this.getHash();

    window.addEventListener('hashchange',this.getHash)

  }
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
