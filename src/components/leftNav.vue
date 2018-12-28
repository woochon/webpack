<template>
    <div class="left-nav">
        <ul>
            <li v-for="(item,index) in navList" :key="index">
                <div>
                    <span>{{item.mainTitle}}</span>
                    <span></span>
                </div>
                <ul>
                    <li v-for="(sub,key) in item.children" :key="key">
                        <div>{{sub.subTitle}}</div>
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
                        mainTitle:'账户管理',
                        navTo:'',
                        children:[
                            {
                                subTitle:'增加管理员',
                                navTo:''
                            },
                            {
                                subTitle:'删除管理员',
                                navTo:''
                            }
                        ]
                    },
                    {
                        mainTitle:'轮播管理',
                        navTo:'',
                        children:[
                            {
                                subTitle:'增加轮播',
                                navTo:''
                            },
                            {
                                subTitle:'删除轮播',
                                navTo:''
                            }
                        ]
                    },
                    {
                        mainTitle:'导航管理',
                        navTo:'',
                        children:[
                            {
                                subTitle:'增加导航',
                                navTo:''
                            },
                            {
                                subTitle:'删除导航',
                                navTo:''
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .left-nav{
        width: 100%;
        background-color: #fff;
        color: darkslateblue;

    }
</style>