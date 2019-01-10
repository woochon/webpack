<template>
    <div class="left-nav">
        <ul class="sup-wrapper">
            <li v-for="(item,index) in navList" :key="index" class="main-title"  ref="categ">
                <div class="sup" @click="drop(item,index)">
                    <span class="glyphicon" aria-hidden="true" :class="item.icon"></span>
                    <span class="main-nav">{{item.mainTitle}}</span>
                    <span class="glyphicon" :class="iconDir(item.show)" ref="icon"></span>
                </div>
                <ul class="sub-title">
                    <li v-for="(sub,key) in item.children" :key="key" class="detail-title">
                        <router-link tag="div" :to="sub.navTo">{{sub.subTitle}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    // import {toggleClass} from '../common/js/dom'
    export default{
        name:'leftNav',
        data(){
            return {
                navList:[
                    {
                        icon:'glyphicon-user',
                        mainTitle:'账户管理',
                        navTo:'/home',
                        show:true,
                        children:[
                            {
                                subTitle:'管理列表',
                                navTo:'/home/manage'
                            },
                            {
                                subTitle:'个人中心',
                                navTo:'/home/personCenter'
                            }
                        ]
                    },
                    {
                        icon:'glyphicon-headphones',
                        mainTitle:'导航管理',
                        navTo:'/nav',
                        show:false,
                        children:[
                            {
                                subTitle:'导航列表',
                                navTo:'/nav/navList'
                            },
                            {
                                subTitle:'删除导航',
                                navTo:'/nav/delList'
                            }
                        ]
                    },
                    {
                        icon:'glyphicon-film',
                        mainTitle:'轮播管理',
                        navTo:'/banner',
                        show:false,
                        children:[
                            {
                                subTitle:'轮播列表',
                                navTo:'/banner/bannerList'
                            },
                            {
                                subTitle:'删除轮播',
                                navTo:'/home'
                            },
                            {
                                subTitle:'增加管理员',
                                navTo:'/home'
                            }
                        ]
                    },
                    {
                        icon:'glyphicon-film',
                        mainTitle:'分类管理',
                        navTo:'/home',
                        show:false,
                        children:[
                            {
                                subTitle:'分类列表',
                                navTo:'/conManage/conList'
                            },
                            {
                                subTitle:'增加分类',
                                navTo:'/conManage/addCon'
                            },
                            {
                                subTitle:'编写文章',
                                navTo:'/conManage/editCon'
                            }
                        ]
                    },
                    {
                        icon:'glyphicon-signal',
                        mainTitle:'统计管理',
                        navTo:'/home',
                        show:false,
                        children:[
                            {
                                subTitle:'加载统计',
                                navTo:'/statistical/time'
                            },
                            {
                                subTitle:'错误统计',
                                navTo:'/statistical/error'
                            }
                        ]
                    }
                ]
            }
        },
        mounted(){
            //默认将一级菜单的第一个打开
            let count=0;
            count =this.navList[0].children.length;
            let allHeight = (count+1) * 40;
            this.$refs.categ[0].style.height=allHeight+'px';
        },
        methods:{
            drop(item,index){
                this.$nextTick(()=>{
                    let count=0;
                    this.navList.forEach((item,key)=>{
                        if(index===key){
                            item.show=true;
                            count =this.navList[index].children.length;
                            let allHeight = (count+1) * 40;
                            this.$refs.categ[index].style.height=allHeight+'px';
                        }else{
                            item.show=false;
                            this.$refs.categ[key].style.height='40px';
                        }
                    });
                });
            },
            iconDir(flag){
                return flag? 'glyphicon-menu-down':'glyphicon-menu-up';
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    @import '../common/scss/variable.scss';
    .router-link-active{
        color: $color-text;
        background-color: $color-text-blue;
    }
    li{
        height: 40px;
        line-height: 40px;
    }
    .left-nav{
        width: 100%;
        background-color: $color-background-t;
        color: $color-text-ll;
        .sup-wrapper{
            padding-top: 30px;
            .main-title{
                overflow: hidden;
                transition: height 1s;
            }
            .sup{
                padding-left: 20px;
                .main-nav{
                    margin-right: 40px;
                }
            }
            .sub-title{
                background-color: $color-background-t2;
                .detail-title{
                    text-indent: 35px;
                }
            }
        }

    }
</style>
