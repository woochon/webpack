<template>
    <div class="add-article">
        <h2>添加文章分类</h2>
        <div class="main-wrapper">
            <div class="item warm" ref="warm">
            </div>
            <div class="item">
                <label for="category_name"><span>分类名称</span></label>
                <input type="text" id="category_name" class="theme long" placeholder="请输4-6个由汉字,数字,字母组成的分类名称" @blur="validate_name" v-model="categoryName">
            </div>
            <div class="item">
                <label for="parent_category"><span>上级分类</span></label>
                <select v-model="select" id="parent_category" class="long" @change="getChange">
                    <option v-for="(item,index) in categoryGroup" :value="item._id" :key="index">{{item.title}}</option>
                </select>
            </div>
            <div class="item">
                <label for="keywords"><span class="w3">关键字</span></label>
                <input type="text" id="keywords" class="long theme" placeholder="请输不超过10个由汉字,数字,字母组成的关键字" v-model="keywords" @blur="validate_keywords">
            </div>
            <div class="item">
                <label for="state"><span class="w2">状态</span></label>
                <input type="checkbox"  class="theme" id="state" v-model="state">
                <span>激活</span>
            </div>
            <div class="item">
                <label for="description"><span class="w2">描述</span></label>
                <textarea v-model="description" id="description" class="long text" @blur="validate_description" placeholder="描述不得超过100字"></textarea>
            </div>
            <div class="btn-wrapper">
                <div class="my-btn-long extra-tbn" @click="submitData">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCategoryList,addCategory} from "../../common/js/http";
    import {validate} from "../../common/js/dom";

    export default{
        name:'add-article',
        data(){
            return {
                isError:false,
                categoryName:'',
                keywords:'',
                select:'0',
                routeList:'gf',
                state:false,
                description:'',
                categoryGroup:[
                    /*{
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
                    }*/
                ]
            }
        },
        watch:{
            /*$route(val){
                console.log(val);
                console.log(this.$route.meta.routeList,'=====');
            }*/
            $route:{
                handler(newV,oldV){
                    console.log(newV);
                    console.log(this.$route.meta.routeList,'=====');
                },
                deep:true
            }
        },
        created(){
            /*getCategoryList({mode:'0'}).then(res=>{
                console.log(res);
                this.categoryGroup=res.data;
            })*/
            console.log('-=====');
        },
        mounted(){
            console.log(this.routeList,'||||||');
        },
        methods:{
            getChange(data){
                console.log(data,'===');
            },
            validate_name(){
                this.$refs.warm.innerHTML='';
                let reg = /^[\u4E00-\u9FA5A-Za-z0-9]{4,6}$/;
                let flag= validate(this.categoryName,reg);
                if(!flag){
                    console.log('adsf');
                    this.$refs.warm.innerHTML='分类名称格式错误';
                    return false;
                }
                return true;
            },
            validate_keywords(){
                this.$refs.warm.innerHTML='';
                let reg = /^[\u4E00-\u9FA5A-Za-z0-9]{1,10}$/;
                let flag= validate(this.keywords,reg);
                if(!this.keywords){
                    this.$refs.warm.innerHTML='关键字不能为空';
                    return false;
                }
                if(!flag){
                    this.$refs.warm.innerHTML='分类名称格式错误';
                    return false;
                }
                return true;
            },
            validate_description(){
                this.$refs.warm.innerHTML='';
                let reg = /^[\u4E00-\u9FA5|\x21-\x7e]{1,100}$/;
                let flag= validate(this.description,reg);
                if(!this.description){
                    this.$refs.warm.innerHTML='描述不能为空';
                    return false;
                }
                if(!flag){
                    this.$refs.warm.innerHTML='描述不符合要求';
                    return false;
                }
                return true;
            },
            submitData(){
                if(this.validate_name()&&this.validate_keywords()&&this.validate_description()){
                    addCategory({
                        title:this.categoryName,
                        description: this.description,
                        pid:this.select,
                        keywords:this.keywords,
                        state:this.state
                    }).then(res=>{
                        console.log(res);
                    })
                }
            }

        },
        beforeRouteEnter(to,form ,next){
            next(vm=>{
                console.log(to.meta.routeList,'qqqqq');
                vm.routeList = to.meta.routeList
            })
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
            &.warm{
                color: $color-sub-theme;
            }
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
