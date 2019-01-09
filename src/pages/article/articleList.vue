<template>
    <div class="add-article">
        <h2>文章内容列表</h2>
        <div class="main-wrapper">
            <!--<MyTable :titles="titles" :data="articleList"></MyTable>-->
            <ul class="m-title">
                <li>分类名称</li>
                <li>状态</li>
                <li>操作</li>
            </ul>
            <ul>
                <li v-for="(item,index) in articleList" :key="index" class="main-title">
                    <div>
                        <span>{{item.title}}</span>
                        <span class="glyphicon" :class="item.state?'glyphicon-ok':'glyphicon-remove'"></span>
                        <span>
                        <span class="glyphicon glyphicon-trash operation" @click="handle(item,0)"></span>
                        <span class="glyphicon glyphicon-pencil operation" @click="handle(item,1)"></span>

                    </span>
                    </div>
                    <ul>
                        <li v-for="(sub,key) in item.list" :key="key" class="main-title">
                            <span><span class="sub-con">----{{sub.title}}</span></span>
                            <span class="glyphicon" :class="sub.state?'glyphicon-ok':'glyphicon-remove'"></span>
                            <span>
                      <Model v-model="showDialog" key="remove">
            <div slot="contents">
                <p class="dialog-p">{{msg}}</p>
            </div>
            <div slot="footers">
                <div class="my-btn extra-conform" @click="conformlDialogs">确定</div>
                <div class="my-btn extra-cancel" @click="cancelDialogs">取消</div>
            </div>
        </Model>          <span class="glyphicon glyphicon-trash operation" @click="handle(sub,0)"></span>
                                <span class="glyphicon glyphicon-pencil operation" @click="handle(sub,1)"></span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <Model v-model="showDialog" key="remove" class-name="remove">
            <div slot="contents">
                <p class="dialog-p">{{msg}}</p>
            </div>
            <div slot="footers" class="remove-f">
                <div class="my-btn extra-conform" @click="conformlDialogs">确定</div>
                <div class="my-btn extra-cancel" @click="cancelDialogs">取消</div>
            </div>
        </Model>
        <Model v-model="showEditor" key="editor" class-name="editor">
            <div slot="contents">
                编辑内容
            </div>
            <div slot="footers">
                <div class="my-btn extra-conform" @click="conformlDialogs">确定</div>
                <div class="my-btn extra-cancel" @click="cancelDialogs">取消</div>
            </div>
        </Model>
    </div>
</template>
<script>
    import {getCategoryList,addCategory,removeCategory,editorCategory} from "../../common/js/http";
    import MyTable from 'components/myTable2';
    import Model from 'components/dialogs'
    export default{
        name:'add-article',
        data(){
            return {
                titles:[],
                articleList:[],
                msg:'确定删除吗？',
                showDialog:false,
                showEditor:false,
                handleItem:''
            }
        },
        components:{
            MyTable,
            Model
        },
        created(){
            /*getCategoryList().then(res=>{
                console.log(res);
                this.articleList=res.data;
            });*/
            let tmp={"name":"zhansgan","data":[{"_id":"5c2cc567996f3446cfd5caf4","title":"用koa2当后台","description":"使用koa2当后台，给前端提供接口","keywords":"koa2,后台","pid":"0","add_time":123456789,"list":[{"_id":"5c2e0925a80cdf129274cd7d","title":"koa-router","description":"使用koa-router来路由，方便页面跳转","keywords":"koa2,路由,router","pid":"5c2cc567996f3446cfd5caf4","add_time":122456789},{"_id":"5c2e09a3a80cdf129274cd7e","title":"koa-static","description":"使用koa-static来静态资源托管，方便访问","keywords":"koa2,静态资源,static","pid":"5c2cc567996f3446cfd5caf4","add_time":122456189}]},{"_id":"5c2e0a28a80cdf129274cd7f","title":"vue","description":"使用vue2做框架，快速开发","keywords":"vue2,前端","pid":"0","add_time":12244619,"list":[{"_id":"5c2e0ab0a80cdf129274cd80","title":"axios","description":"使用axios做ajax，快速访问接口","keywords":"axios,前端,vue2","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c2e0b0fa80cdf129274cd81","title":"eslint","description":"使用eslint规范前端代码,代码风格统一","keywords":"eslint,前端","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c2e0b56a80cdf129274cd82","title":"webpack","description":"webpack来打包项目，减少二次请求","keywords":"webpack,前端","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c3365ed9cb5eb2330846df9","title":"vueLin","description":"阿斯蒂芬阿斯蒂芬啊","pid":"5c2e0a28a80cdf129274cd7f","keywords":"规则检测","state":"true","add_time":1546872301050}]},{"_id":"5c2e0beca80cdf129274cd83","title":"测试","description":"使用禅道来提交的项目代码bug","keywords":"测试,前端,禅道","pid":"0","add_time":12244619,"list":[{"_id":"5c2e37ada80cdf129274cd84","title":"filder","description":"使用filder来抓取请求","keywords":"测试,filder","pid":"5c2e0beca80cdf129274cd83","add_time":12244619}]},{"_id":"5c335048f055a60f889e29d4","title":"产品设计","description":"跟进进度","pid":"0","keywords":"prodution","state":"true","add_time":1546866760714,"list":[]}]};
            this.articleList = tmp.data;
        },
        methods:{
            handle(data,flag){
                this.handleItem = data;
                if(flag){
                    this.showEditor=true;
                }else{
                    this.showDialog=true;
                }
            },
            editorItem(data){
                console.log(data);
                editorCategory({id:data._id}).then(res=>{
                    console.log(res);
                })
            },
            removeItem(data){
                console.log(data);
                removeCategory({id:data._id}).then(res=>{
                    if(res.code===0){
                        this.showDialog=false;
                    }
                })
            },
            conformlDialogs(){
                this.removeItem(this.handleItem);
            },
            cancelDialogs(){
                this.showDialog=false;
                this.handleItem='';
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    @import '../../common/scss/variable';
    .operation{
        cursor: pointer;
    }
    .main-wrapper{
        .m-title{
            width: 1000px;
            display: flex;
            background-color: $color-dialog-background;
            &>li{
                flex:1;
                line-height: 40px;
            }
        }
        .main-title{
            width: 1000px;
            &>div,&>ul>li{
                width: 1000px;
                display: flex;
                &>span{
                    flex:1;
                }
            }
            &>ul>li{
                line-height: 40px;
            }
            .sub-con{
                padding-left: 30px;
            }
        }
    }
    /deep/.remove .dialog-wrapper{
        width: 300px;
        height: 60px !important;
        .contents{
            font-size: 18px;
            line-height: 24px;
            background-color: red;
        }
        .footers{
            display: flex;
            justify-content: space-between;
        }
    }
    .dialog-p{
        line-height: 20px;
        color: red;
        font-size: 18px;
        padding: 5px 10px;
        margin-bottom: 0;
    }
    .remove-f{
        display: flex;
        justify-content: space-around;
        align-items: center;
        &>div{
            background-color: $color-sub-theme;
            color: $color-text;
            width: 68px;
            height: 28px;
            border-radius: 5px;
            cursor: pointer;
            line-height: 28px;
            text-align: center;
        }
    }
    /deep/.editor .dialog-wrapper{
        width: 600px;
        height: 400px;
    }
</style>
