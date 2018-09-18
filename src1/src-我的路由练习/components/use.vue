<template>
    <div>
        <div>我是use页面</div>
        <router-link to="/user/1">leo</router-link>
        <router-link to="/user/2">momo</router-link>
        <hr>
        <h3>这里展示用户的信息</h3>
        <div>姓名:{{info.title}}</div>
        <div>年龄:{{info.age}}</div>
    </div>
</template>
<script>
    let list=[
        {title:"leo",age:"20",id:1},
        {title:"momo",age:"30",id:2}
        ]
    export default{
        data(){
            return {
                    info:{
                    title:'XXX',
                    age:'XXX'
                }
            }
        },
        watch:{
            $route:{
                handler(){
                console.log('路由信息变了',this.$route)
                let id=this.$route.params.abc;
                console.log(id)
                    if(id){
                        let item=list.find(item=>item.id==id);
                        console.log(item)
                        this.info=item
                    }
                },
                immediate: true

            }
        }
    }
</script>
