<template>
    <div class="add-article">
        <h2>文章内容列表</h2>
        <div class="main-wrapper">
            <!--<MyTable :titles="titles" :data="articleList"></MyTable>-->
            <ul class="m-title">
                <li>分类名称</li>
                <li>操作</li>
            </ul>
            <ul>
                <li v-for="(item,index) in articleList" :key="index" class="main-title">
                    <span>{{item.title}}</span>
                    <span>
                        <button>编辑</button>
                        <button>删除</button>
                    </span>
                    <ul>
                        <li v-for="(sub,key) in item.list" :key="key" class="main-title">
                            <span class="sub-con">----{{sub.title}}</span>
                            <span>
                                <button>编辑</button>
                                <button>删除</button>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    // {"name":"zhansgan","data":[{"_id":"5c2cc567996f3446cfd5caf4","title":"用koa2当后台","description":"使用koa2当后台，给前端提供接口","keywords":"koa2,后台","pid":"0","add_time":123456789,"list":[{"_id":"5c2e0925a80cdf129274cd7d","title":"koa-router","description":"使用koa-router来路由，方便页面跳转","keywords":"koa2,路由,router","pid":"5c2cc567996f3446cfd5caf4","add_time":122456789},{"_id":"5c2e09a3a80cdf129274cd7e","title":"koa-static","description":"使用koa-static来静态资源托管，方便访问","keywords":"koa2,静态资源,static","pid":"5c2cc567996f3446cfd5caf4","add_time":122456189}]},{"_id":"5c2e0a28a80cdf129274cd7f","title":"vue","description":"使用vue2做框架，快速开发","keywords":"vue2,前端","pid":"0","add_time":12244619,"list":[{"_id":"5c2e0ab0a80cdf129274cd80","title":"axios","description":"使用axios做ajax，快速访问接口","keywords":"axios,前端,vue2","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c2e0b0fa80cdf129274cd81","title":"eslint","description":"使用eslint规范前端代码,代码风格统一","keywords":"eslint,前端","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c2e0b56a80cdf129274cd82","title":"webpack","description":"webpack来打包项目，减少二次请求","keywords":"webpack,前端","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c3365ed9cb5eb2330846df9","title":"vueLin","description":"阿斯蒂芬阿斯蒂芬啊","pid":"5c2e0a28a80cdf129274cd7f","keywords":"规则检测","state":"true","add_time":1546872301050}]},{"_id":"5c2e0beca80cdf129274cd83","title":"测试","description":"使用禅道来提交的项目代码bug","keywords":"测试,前端,禅道","pid":"0","add_time":12244619,"list":[{"_id":"5c2e37ada80cdf129274cd84","title":"filder","description":"使用filder来抓取请求","keywords":"测试,filder","pid":"5c2e0beca80cdf129274cd83","add_time":12244619}]},{"_id":"5c335048f055a60f889e29d4","title":"产品设计","description":"跟进进度","pid":"0","keywords":"prodution","state":"true","add_time":1546866760714,"list":[]}]}
    import {getCategoryList,addCategory} from "../../common/js/http";
    import MyTable from 'components/myTable2'
    export default{
        name:'add-article',
        data(){
            return {
                titles:[
                    /*{
                        label:'标题',
                        key:'title'
                    },
                    {
                        label:'分类',
                        key:'category'
                    },
                    {
                        label:'发布时间',
                        key:'time'
                    },
                    {
                        label:'热门',
                        key:'hot'
                    },
                    {
                        label:"精品",
                        key:'best'
                    },
                    {
                        label:'最新',
                        key:"new"
                    }*/
                ],
                articleList:[
                    /*{
                        title:'koa2',
                        category:'后台',
                        time:'2019-01-02',
                        hot:true,
                        best:true,
                        new:true
                    },
                    {
                        title:'koa2',
                        category:'后台',
                        time:'2019-01-02',
                        hot:true,
                        best:true,
                        new:true
                    },
                    {
                        title:'koa2',
                        category:'后台',
                        time:'2019-01-02',
                        hot:true,
                        best:true,
                        new:true
                    },
                    {
                        title:'koa2',
                        category:'后台',
                        time:'2019-01-02',
                        hot:true,
                        best:true,
                        new:true
                    },
                    {
                        title:'koa2',
                        category:'后台',
                        time:'2019-01-02',
                        hot:true,
                        best:true,
                        new:true
                    },
                    {
                        title:'koa2',
                        category:'后台',
                        time:'2019-01-02',
                        hot:true,
                        best:true,
                        new:true
                    }*/
                ]
            }
        },
        components:{
            MyTable
        },
        created(){
            getCategoryList().then(res=>{
                console.log(res);
                this.articleList=res.data;
            })
        },
        methods:{

        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .main-wrapper{
        .m-title{
            width: 1000px;
            display: flex;
            &>li{
                flex:1;
            }
        }
        .main-title{
            width: 100%;
            &>span{
                display: inline-block;
                width: 500px;
            }
            .sub-con{
                padding-left: 30px;
            }
        }
    }
</style>
