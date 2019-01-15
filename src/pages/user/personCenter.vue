<template>
    <div class="person-center">
        <h3>个人资料</h3>
        <div class="info">
            <div class="avatar">
                <img src="../../images/dojo.png" alt="" class="img">
                <div class="pointer" @click="changeAvatar">修改头像</div>
            </div>
            <div class="main-content">
                <ul>
                    <li class="item special">
                        <div><span class="title">昵称:</span>{{nickName}}</div><div class="modify pointer" @click="modifyInfo">修改资料</div>
                    </li>
                    <li class="item"><span class="title">姓名:</span><span class="content">woocon</span></li>
                    <li class="item"><span class="title">性别:</span><span class="content">男</span></li>
                    <li class="item"><span class="title">生日:</span><span class="content"></span></li>
                    <li class="item"><span class="title">地区:</span><span class="content"></span></li>
                    <li class="item"><span class="title">行业:</span><span class="content"></span></li>
                    <li class="item"><span class="title">职位:</span><span class="content"></span></li>
                    <li class="item"><span class="title">简介:</span><p class="content special">
                            feeeeeeeeeeeeeeeeeeeeeeeeeerwerwrffffffffffffffffffffffffffffffff出
                    </p></li>
                </ul>
            </div>
        </div>
        <avatarDialog v-model="avatarDialog" class-name="avatar">
            <div slot="headers" class="avatar title">
                <div>上传图像</div>
            </div>
            <div slot="contents" class="avatar main">
                <label for="avatar" class="label pointer">
                    点击图片添加到此处
                </label>
                <input type="file" id="avatar" class="file">
            </div>
            <div slot="footers" class="avatar operation">
                <div class="my-btn-long extra">取消</div>
            </div>
        </avatarDialog>
    </div>
</template>
<script>
    import avatarDialog from 'components/dialogs'
    export default{
        name:'menuNav',
        data(){
            return {
                msg:'个人中心',
                nickName:'吴呈',
                avatarDialog:false,
            }
        },
        components:{
            avatarDialog
        },
        methods:{
            modifyInfo(){
                console.log('修改个人信息');
            },
            changeAvatar(){
                console.log('更改头像并弹框');
                this.avatarDialog=true;
            }

        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    @import '../../common/scss/variable';
    .person-center{
        .info{
            width: 1020px;
            display: flex;
            justify-content:space-between ;
            align-items: start;
            .avatar{
                flex-basis: 120px;
                display: flex;
                padding: 10px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .pointer{
                    color: $color-text-blue;
                }
                .img{
                    width: 100px;
                    margin-bottom: 20px;
                }
            }
            .main-content{
                width: 900px;
                flex:1;
                .item{
                    display: flex;
                    justify-content: start;
                    align-items: start;
                    padding: 10px;
                    &.special{
                        justify-content: space-between;
                        .title{
                            display: inline-block;
                            width: 4em;
                        }
                        .modify{
                            color: $color-text-blue;
                        }
                    }
                    .title{
                        flex:0 0 4em;
                    }
                    .content{
                        flex:1;
                        &.special{
                            width: 824px;
                        }
                    }
                }
            }

        }
    }
    /deep/.avatar .dialog-wrapper{
        width: 600px;
        height: 240px;
    }
    .avatar{
        padding: 10px;
        &.main{
            /*height: 100px;*/
            .label{
                width: 100%;
                height: 100px;
                line-height: 100px;
                display: inline-block;
                text-align: center;
                padding: 0;
                border:1px solid $color-dialog-background;
                color: $color-background;
            }
            .file{
                display: none;
            }
        }
        &.operation{
            text-align: center;
            .extra{
                width: 88px;
                height: 34px;
                line-height: 34px;
                background-color: $color-sub-theme;
                margin: 0 auto;
            }
        }
    }
</style>
