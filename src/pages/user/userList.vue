<template>
    <div class="user-list">
        <ul class="con">
            <li class="bar">
                <div class="name">姓名</div>
                <div class="state">状态</div>
                <div class="operation">操作</div>
            </li>
            <li v-for="(item,index) in userList" class="bar spe">
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
                <OperationJS :item="item" @message="handleMessage">

                </OperationJS>
            </li>
        </ul>
        <Dialog v-model="showEditor" class-name="editor">
            <div slot="headers">
                <h3 class="editor-title">用户编辑</h3>
            </div>
            <div slot="contents">
                <div class="editor-content">
                    <div class="item warm" ref="warm"></div>
                    <div class="item">
                        <label for="category_name"><span class="w3">用户名</span></label>
                        <input type="text" id="category_name" class="theme long" placeholder="请输4-6个由汉字,数字,字母组成的分类名称" @blur="validate_name" v-model="userName">
                    </div>
                    <div class="item">
                        <label for="state"><span>用户状态</span></label>
                        <input type="checkbox"  class="theme" id="state" v-model="state">
                        <span>是否禁用</span>
                    </div>
                </div>
            </div>
            <div slot="footers" class="editor-footer">
                <div class="my-btn extra-conform" @click="editorConform">确定</div>
                <div class="my-btn extra-cancel" @click="editorCancel">取消</div>
            </div>
        </Dialog>
        <m-confirm v-model="showWarm" :message="msg" @confirm="confirm"></m-confirm>
    </div>
</template>
<script>
    /*
    * state 为0时表示禁止状态  可进行激活,还有删除操作
    * state 为1时表示激活状态  可进行禁止,还有编辑操作
    * */
    import Operation from './operation';
    import OperationJS from './operateRender';
    import Dialog from 'components/dialogs';
    import mConfirm from 'components/comfirm';
    import {validate} from "../../common/js/dom";
    export default{
        name:'manage',
        data(){
            return {
                msg:'',
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
                ],
                showEditor:false,
                showWarm:false,
                handleItem:null,
                userName:'',
                state:false
            }
        },
        components:{
            Dialog,
            Operation,
            OperationJS,
            mConfirm
            /* 不行 */
            /*Self:render(createElement)=>{}*/
        },
        /* 不行 */
        /*render:function (createElement) {
            return createElement('h1', this.msg)
        }*/
        methods:{
            handleMessage(data){
                console.log(data.data);
                this.handleItem = data.data;
                if(data.state===0){
                    console.log('编辑');
                    this.showEditor=true;
                }else{
                    console.log('修改数据库');
                    this.msg='确定执行操作吗？';
                    this.showWarm=true;
                }
                /*switch(data){
                    case 0:
                        console.log('编辑');
                        break;
                    case 1:
                        console.log('删除');
                        break;
                    case 2:
                        console.log('删除');
                        break;
                    case 3:
                        console.log('删除');
                        break;
                }*/
            },
            confirm(data){
                console.log(data);
                if(data){
                    console.log(this.handleItem);
                }else{
                    this.handleItem = null;
                    this.showWarm=false
                }
            },
            validate_name(){
                this.$refs.warm.innerHTML='';
                let reg = /^[\u4E00-\u9FA5|A-Za-z0-9]{4,6}$/;
                let flag= validate(this.userName,reg);
                if(!flag){
                    console.log('adsf');
                    this.$refs.warm.innerHTML='用户名称格式错误';
                    return false;
                }
                return true;
            },
            editorConform(){
                console.log(this.userName+this.state);
                this.showEditor=false;
            },
            editorCancel(){
                this.showEditor=false;
                this.handleItem = null;
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    @import '../../common/scss/variable';
    @import '../../common/scss/mixin';
    .user-list{
        li{
            display: flex;
            div{
                flex:1;
                text-align: left;
            }
        }
        .bar{
            border-left:1px solid gray;
            border-right: 1px solid gray;
            border-top: 1px solid gray;
            padding: 10px 0;
            &.spe:last-of-type{
                border-bottom: 1px solid gray;
            }
            &>div{
                line-height: 30px;
            }
        }
        .con{
            margin: 50px 0 0 50px;
        }
    }
    /deep/.editor .dialog-wrapper{
        width: 600px;
        height: 300px;
    }
    .editor-title{
        text-align: center;
    }
    .editor-content{
        .item{
            width: 400px;
            padding: 15px 0;
            margin: 0 auto;
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
    }
    .editor-footer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        .my-btn{
            width: 120px;
            height: 40px;
            line-height: 40px;
            background-color: $color-sub-theme;
            color: $color-text;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
        }
    }
</style>
