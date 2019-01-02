<template>
    <div class="user-list">
        <ul>
            <li>
                <div class="name">姓名</div>
                <div class="state">状态</div>
                <div class="operation">操作</div>
            </li>
            <li v-for="(item,index) in userList">
                <div class="name">{{item.name}}</div>
                <div class="state">
                    <span>{{states[item.state]}}</span>
                </div>
                <!-- 方式1 -->
                <!--<div class="operation">
                    <div class="state-0" v-if="item.state===0">
                        <span>激活</span>
                        <span>删除</span>
                    </div>
                    <div class="state-1" v-else>
                        <span>禁止</span>
                        <span>编辑</span>
                    </div>
                </div>-->
                <!-- 方式二 -->
                <!--<Operation :state="item.state"></Operation>-->
                <!-- 方式三 -->
                <OperationJS :state="item.state" @message="handleMessage">

                </OperationJS>
            </li>
        </ul>
    </div>
</template>
<script>
    /*
    * state 为0时表示禁止状态  可进行激活,还有删除操作
    * state 为1时表示激活状态  可进行禁止,还有编辑操作
    * */
    import Operation from './operation';
    import OperationJS from './operateRender'
    export default{
        name:'manage',
        data(){
            return {
                msg:'管理员列表',
                states:['禁止','激活'],
                userList:[
                    {
                        name:'zhangsan',
                        state:0,
                    },
                    {
                        name:'lisi',
                        state:1,
                    },
                    {
                        name:'wangwu',
                        state:0,
                    },
                    {
                        name:'zhaoliu',
                        state:1,
                    }
                ]
            }
        },
        components:{
            Operation,
            OperationJS,
            /* 不行 */
            /*Self:render(createElement)=>{}*/
        },
        /* 不行 */
        /*render:function (createElement) {
            return createElement('h1', this.msg)
        }*/
        methods:{
            handleMessage(data){
                console.log('从子组件得到消息：'+data);
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .user-list{
        color: yellow;
        li{
            display: flex;
            div{
                flex:1;
                text-align: left;
            }
        }
    }
</style>
