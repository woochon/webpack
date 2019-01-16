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
                <p ref="avatarWarm">图片宽高至少为100*100,大小不超过2M</p>
                <input type="file" id="avatar" class="file" @change="handleChange" accept="image/jpeg,image/jpg,image/png">
            </div>
            <div slot="footers" class="avatar operation">
                <div class="my-btn-long extra">取消</div>
            </div>
        </avatarDialog>
        <avatarDialog v-model="modifyDialog" class-name="upload">
            <div slot="headers" class="upload title">
                <div>修改图像</div>
            </div>
            <div slot="contents" class="upload main">
                <div class="left">
                    <img :src="tmpImg" alt="" class="origin">
                </div>
                <div class="right">
                    <img :src="preViewImg" alt="">
                </div>
            </div>
            <div slot="footers" class="upload operation">
                <div class="my-btn-long extra">上一步</div>
                <div class="my-btn-long extra" @click="uploadAvatar">上传并保存</div>
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
                modifyDialog:false,
                tmpImg:'',
                preViewImg:'',
                tmpFile:'',
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
            },
            handleChange(e){
                /*https://blog.csdn.net/huangxin112/article/details/74956462*/
                /*https://blog.csdn.net/yudldl/article/details/83090021*/
                console.log(e.target.files);
                let file = e.target.files[0];
                console.log(file,'===');
                const typeArr= ["image/jpeg","image/jpg","image/png"];
                if(typeArr.indexOf(file.type)<0){
                    this.$refs.avatarWarm.innerHTML='图片类型只能为png,jpg!';
                    this.$refs.avatarWarm.cssText ='color:red;fontSize:16px';
                    return ;
                }
                if(file.size>2*1024*1024){
                    console.log('图片大小不能超过2MB!');
                    this.$refs.avatarWarm.innerHTML='图片大小不能超过2MB!';
                    this.$refs.avatarWarm.cssText ='color:red;fontSize:16px';
                    return ;
                }
                this.tmpFile =file;
                    // 创建url
                /*let imgUrl=window.URL.createObjectURL(file);
                this.tmpImg=imgUrl;
                this.$refs.uploadImg.onload=function(){
                    console.log('图片加载成功');
                    URL.revokeObjectURL(imgUrl);
                }*/
                let reader = new FileReader();
                reader.readAsDataURL(file);
                let _this= this; //必不可少，reader.onload的this指向问题
                reader.onload=function(e){
                    // console.log(e);
                    //console.log(e.target.result);
                    _this.modifyDialog=true;
                    _this.tmpImg=e.target.result;
                    //console.log(_this.$refs.uploadImg);
                }
            },
            uploadAvatar(){
                let data = new FormData();
                data.append("file",this.tmpFile);
                data.append("userId","5c3d85e7424fc5c02e512912");
                data.append("name","asdfasd");
                let xhr = new XMLHttpRequest();
                xhr.open('post', 'http://localhost:3000/uploadAvatar',true);
                /*xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");*/
                // 上传完成后的回调函数
                xhr.onreadystatechange = function() {
                    if (xhr.status === 200) {
                        console.log(xhr.responseText);
                    } else {
                        console.log('上传出错');
                    }
                };
            // 获取上传进度
                xhr.upload.onprogress = function(event) {
                    console.log(event.loaded);
                    console.log(event.total);
                    if (event.lengthComputable) {
                        let percent = Math.floor(event.loaded / event.total * 100);
                        /* document.querySelector("#progress .progress-item").style.width = percent + "%";*/
                        // 设置进度显示
                        console.log(percent)
                    }
                };
                console.log(data);
                xhr.send(data);
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
    /deep/.upload .dialog-wrapper{
        width: 600px;
        height: 360px;
    }
    .upload{
        padding: 10px;
        &.main{
            display: flex;
            justify-content: space-around;
            align-items: start;
            height: 240px;
            background-color: gray;
            .left{
                width: 300px;
                text-align: center;
                background-color: blue;
                overflow: hidden;
                .origin{
                    width: 300px;
                }
            }
            .right{
                width: 100px;
                background-color: red;
                .new{
                    width: 100px;
                }
            }
        }
        &.operation{
            display: flex;
            justify-content: center;
            align-items: center;
            .extra{
                padding: 0 8px;
                height: 34px;
                line-height: 34px;
                background-color: $color-sub-theme;
                margin: 0 auto;
            }
        }
    }

    /deep/.avatar .dialog-wrapper{
        width: 600px;
        height: 260px;
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
