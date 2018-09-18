<template>
  <div class="layout">
    
    <Layout>
        <Header :style="{position: 'fixed', width: '100%'}">
            <Menu mode="horizontal" theme="dark" :active-name="activeName">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem :name="index" 
                      v-for="(item,index) in navConfig"
                      :key="item.params.tab"
                      :to="{name: item.name,params: item.params}"
                    >
                        <Icon :type="item.icon"></Icon>
                        {{item.title}}
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Content :style="{
          margin: '88px 20px 0', 
          background: '#fff', 
          minHeight: '500px',
          position:'relative'
          }"
        >
            <item 
              v-for="item in list"
              :key="item.id"
              :option="item"
            ></item>
             
        </Content>
        <Page  :total="100" :page-size='10' @on-change="changePage" />
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
</div>

</template>
<script>
  import navConfig from '@/router/navConfig'
  import Item from './article-item'
    export default {
        data () {
            return {
                navConfig,
                list:[],
                tab:'',
                activeName:0

            }
        },
        components:{
            Item,
        },
        watch:{
            $route(){
                this.geTopcis();
            }
        },
        methods:{
            async geTopcis(){
                let tab=this.$route.params.tab;//地址栏的tab
                let page=this.$route.query.page;
                if(!tab){
                    tab='all'
                }
                if(!page) {
                page = 1;
                }
                console.log(tab)
                let bl=navConfig.some(item=>item.params.tab==tab)
                if(!bl){
                    tab='all'; //只相对路径改变动态路径参数
                    this.$router.push({params:{tab,page:page}})
                }
                // 确定tab值
                this.tab=tab
                let {data}=await this.$api.getTopics({tab});
                this.list=data.data;
                console.log(this.list)
            },
            async changePage(page){
                let queryPage=this.$route.query.page;
                if(!queryPage){
                    queryPage=1;
                }
                
                let o = {
                page: page,
                tab: this.tab
                }
                // 改变query
                this.$router.push({query:{page}})
                let {data} = await this.$api.getTopics(o);

                this.list = data.data;

            }
        },
        created(){
            this.geTopcis()
            let tab=this.$route.params.tab;
            let index=navConfig.findIndex(item=>item.params.tab==tab);
            if(index==-1){
                this.activeName=0;

            }else{
                this.activeName=index;
                console.log(this.activeName)
            }
            console.log(this.activeName)

        }

    }
</script>

<style scoped>
    .ivu-menu-item-active {
      background: red;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>