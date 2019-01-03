<template>
    <div class="add-article">
        <h2>添加文章分类</h2>
        <div class="main-wrapper">
            <div class="item">
                <label for="category_name"><span>分类名称</span></label>
                <input type="text" id="category_name" class="theme long" placeholder="请输分类名称">
            </div>
            <div class="item">
                <label for="parent_category"><span>上级分类</span></label>
                <select v-model="select" id="parent_category" class="long">
                    <option v-for="(item,index) in categoryGroup" :value="item.value" :key="index">{{item.label}}</option>
                </select>
            </div>
            <div class="item">
                <label for="keywords"><span class="w3">关键字</span></label>
                <input type="text" id="keywords" class="long theme" placeholder="请输入关键字">
            </div>
            <div class="item">
                <label for="state"><span class="w2">状态</span></label>
                <input type="checkbox"  class="theme" id="state" v-model="state">
                <span>激活</span>
            </div>
            <div class="item">
                <label for="description"><span class="w2">描述</span></label>
                <textarea v-model="description" id="description" class="long text"></textarea>
            </div>
            <div class="btn-wrapper">
                <div class="my-btn-long extra-tbn">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCategoryList} from "../../common/js/http";
    export default{
        name:'add-article',
        data(){
            return {
                select:'vue',
                state:false,
                description:'',
                categoryGroup:[
                    {
                        value:'top',
                        label:'顶层分类'
                    },
                    {
                        value:'koa2',
                        label:'后端'
                    },
                    {
                        value:'vue',
                        label:'前端'
                    }
                ]
            }
        },
        created(){
            getCategoryList().then(res=>{
                console.log(res);
                let tmp={"code":0,"data":[{"_id":"5c2cc567996f3446cfd5caf4","title":"用koa2当后台","description":"使用koa2当后台，给前端提供接口","keywords":"koa2,后台","pid":"0","add_time":123456789},{"_id":"5c2e0925a80cdf129274cd7d","title":"koa-router","description":"使用koa-router来路由，方便页面跳转","keywords":"koa2,路由,router","pid":"5c2cc567996f3446cfd5caf4","add_time":122456789},{"_id":"5c2e09a3a80cdf129274cd7e","title":"koa-static","description":"使用koa-static来静态资源托管，方便访问","keywords":"koa2,静态资源,static","pid":"5c2cc567996f3446cfd5caf4","add_time":122456189},{"_id":"5c2e0a28a80cdf129274cd7f","title":"vue","description":"使用vue2做框架，快速开发","keywords":"vue2,前端","pid":"0","add_time":12244619},{"_id":"5c2e0ab0a80cdf129274cd80","title":"axios","description":"使用axios做ajax，快速访问接口","keywords":"axios,前端,vue2","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c2e0b0fa80cdf129274cd81","title":"eslint","description":"使用eslint规范前端代码,代码风格统一","keywords":"eslint,前端","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c2e0b56a80cdf129274cd82","title":"webpack","description":"webpack来打包项目，减少二次请求","keywords":"webpack,前端","pid":"5c2e0a28a80cdf129274cd7f","add_time":12244619},{"_id":"5c2e0beca80cdf129274cd83","title":"测试","description":"使用禅道来提交的项目代码bug","keywords":"测试,前端,禅道","pid":"0","add_time":12244619}]};
            })
        },
        methods:{

        }
    }
    /* ObjectId("5c2e0a28a80cdf129274cd7f") */
</script>
<style lang="scss" type="text/scss" scoped>
    @import '../../common/scss/variable';
    @import '../../common/scss/mixin';
    .main-wrapper{
        width: 1000px;
        margin: 30px auto;
        font-size: $font-size-medium_x;
        .item{
            width: 100%;
            padding: 15px 0;
            display: flex;
            label{
                width: 4em;
                font-weight: normal;
                margin-right: 2em;
                .w2{
                    letter-spacing: 2em;
                    margin-right: -2em;
                }
                .w3{
                    letter-spacing: 0.5em;
                    margin-right: -0.5em;
                }
            }
            .long{
                width:  300px;
                font-size: $font-size-medium;
                padding-left: .5em;
                &.text{
                    height: 100px;
                    resize: none;
                }
            }
        }
        .extra-tbn{
            width: 398px;
            background-color: $color-sub-theme;
            height: 40px;
            line-height: 40px;
        }
    }
</style>
