<template>
    <div class="person-center">
        <h3>个人资料</h3>
        <div class="info">
            <div class="avatar">
                <img src="../../images/dojo.png" alt="" class="img">
                <div>修改头像</div>
            </div>
            <div class="main-content">
                <ul>
                    <li class="item special">
                        <div>昵称:</div><div>修改资料</div>
                    </li>
                    <li class="item"><span class="title">姓名:</span><span class="content">woocon</span></li>
                    <li class="item"><span class="title">性别:</span><span class="content">男</span></li>
                    <li class="item"><span class="title">生日:</span><span class="content"></span></li>
                    <li class="item"><span class="title">地区:</span><span class="content"></span></li>
                    <li class="item"><span class="title">行业:</span><span class="content"></span></li>
                    <li class="item"><span class="title">职位:</span><span class="content"></span></li>
                    <li class="item"><span class="title">简介:</span><div class="content">aerfawsedfhbljlisedflSWeflaiWUefhaliWUefhaiWuefhaiwuefhaihfsdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffweafaefawefawefawefawefawefawefawfeawsaedawefdawefawefawedcs擦weSE导出</div></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'menuNav',
        data(){
            return {
                msg:'个人中心'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .person-center{
        .info{
            width: 1000px;
            display: flex;
            background-color: gray;
            justify-content:space-between ;
            align-items: start;
            .avatar{
                flex-basis: 120px;
                display: flex;
                padding: 10px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .img{
                    width: 100px;
                    margin-bottom: 20px;
                }
            }
            .main-content{
                width: 880px;
                flex:1;
                .item{
                    display: flex;
                    justify-content: start;
                    align-items: start;
                    padding: 10px;
                    &.special{
                        justify-content: space-between;
                    }
                    .title{
                        flex-basis: 4em;
                    }
                    .content{
                        flex:1;
                    }
                }
            }

        }
    }
</style>
