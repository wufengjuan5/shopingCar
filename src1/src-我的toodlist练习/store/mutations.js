export default {
    changeoneCheckbox(state,plaload){
    let item=state.list.find(item=>item.id == plaload.id);
        if(item){
            item.checked=!item.checked
        }
    console.log(state.list)
    },
    checkedAll(state,plaload){
        state.list.forEach(item=>item.checked=plaload)
    },
    removeId(state,plaload){
        let index=state.list.findIndex(item=>item.id=plaload)
        state.list.splice(index,1);
    },
    addTodo(state,plaload){
        state.list.unshift({
            title:plaload,
            id:Date.now(),
            checked:false
        })
    },
    editEvent(state,plaload){
        let item=state.list.find(item=>item.id===plaload.id);
        item.title=plaload.title
    },
    changeBeforeTitle(state,plaload){
        state.beforeTitle=plaload;
        console.log(state.beforeTitle)
    },
    cancleEvent(state,plaload){
        let item=state.list.find(item=>item.id===plaload.id);
        console.log(item)
        item.title=state.beforeTitle;
        // state.beforeTitle='';
    },
    changeHash(state,plaload){
      state.hash=plaload.hash  
    }
}