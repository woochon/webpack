<template>
    <div class="left-nav">
        <ul class="sup-wrapper">
            <li v-for="(item,index) in navList" :key="index" class="main-title">
                <div class="sup">
                    <span class="glyphicon" aria-hidden="true" :class="item.icon"></span>
                    <router-link tag="span" :to="item.navTo" class="main-nav">{{item.mainTitle}}</router-link>
                    <span class="glyphicon glyphicon-menu-up"></span>
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
    export default{
        name:'leftNav',
        data(){
            return {
                navList:[
                    {
                        icon:'glyphicon-user',
                        mainTitle:'账户管理',
                        navTo:'/home',
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
                        children:[
                            {
                                subTitle:'增加轮播',
                                navTo:'/home'
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
                ]
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    @import '../common/scss/variable.scss';
    .router-link-active{
        color: $color-text-blue;
    }
    li{
        line-height: 40px;
    }
    .left-nav{
        width: 100%;
        background-color: $color-background-t;
        color: $color-text-ll;
        .sup-wrapper{
            padding-top: 30px;
            .sup{
                padding-left: 20px;
                .main-nav{
                    margin-right: 40px;
                }
            }
            .sub-title{
                background-color: $color-background-t2;
                .detail-title{
                    padding-left: 35px;
                }

            }
        }

    }
</style>
