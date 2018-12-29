<template>
    <div class="user-list">
        {{msg}}
        <ul>
            <li>
                <div class="name">姓名</div>
                <div class="state">状态</div>
                <div class="operation">操作</div>
            </li>
            <li v-for="(item,index) in userList">
                <div class="name">{{item.name}}</div>
                <div class="state">
                    <span v-if="item.state===0">禁止</span>
                    <span v-if="item.state===1">激活</span>
                </div>
                <div class="operation">
                    
                </div>
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
    export default{
        name:'manage',
        data(){
            return {
                msg:'管理员列表',
                states:['禁止','激活'],
                userList:[
                    {
                        name:'zhabfsab',
                        state:0,

                    }
                ]
            }
        },
        components:{
            Operation
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
