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
        methods:{

        }
    }
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
                &.text{
                    height: 100px;
                    resize: none;
                }
            }
        }
        .extra-tbn{
            width: 386px;
            background-color: $color-sub-theme;
            height: 40px;
            line-height: 40px;
        }
    }
</style>