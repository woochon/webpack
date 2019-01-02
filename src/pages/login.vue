<template>
  <div class="login">
    <div class="title">
      <h2>CMS管理系统</h2>
      <p class="desc">CMS management System</p>
    </div>
    <div class="main-wrapper">
      <div class="item">
        <label for="email">邮　箱:</label>
        <input type="text" id="email" class="theme" placeholder="请输入邮箱">
      </div>
      <div class="item">
      <label for="pwd">邮　箱:</label>
      <input type="text" id="pwd" class="theme" placeholder="请输入邮箱">
    </div>
      <div class="item">
        <label for="re_PWD">验证码:</label>
        <input type="text" id="re_PWD" class="theme special" placeholder="请输入邮箱">
        <!--<img src="../images/tmp.png" alt="" class="identify">-->
        <span class="identify"></span>
      </div>
      <div class="error">
        asdfa
      </div>
      <div class="btn-wrapper">
        <div class="my-btn">登录</div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name:"Login",
  data(){
    return {

    };
  },
  created(){
      console.log(this.$route.query.data);
      const tmp=this.$route.query.data;
      console.log(this.$decrypt(tmp));
      console.log(typeof(tmp),'======');
  }
};
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../common/scss/variable';
    .login{
      position: absolute;
      width: 500px;
      height: 350px;
      top: 50%;
      left: 50%;
      background-color: #fff;
      transform: translate(-50%,-50%);
      .title{
        text-align: center;
        color: $color-theme;
        font-size: $font-size-large-xx;
        font-weight: bold;
        .desc{
          margin-top: 10px;
          font-size: $font-size-medium_x;
        }
      }
      .main-wrapper{
        padding: 20px 0;
        .item{
          padding: 5px 0;
          line-height: 24px;
          text-align: center;
          .theme{
            width: 340px;
            border-radius: 3px;
            border:1px solid gray;
            outline: none;
            padding-left: 12px;
            &.special{
              width: 200px;
            }
            &:active{/*文本框获取激活时的样式*/
              border:1px solid $color-sub-theme;
            }
            &:focus{/*文本框获取焦点时的样式*/
              border:1px solid $color-sub-theme;
            }
          }
          .identify{
            display: inline-block;
            width: 100px;
            height: 24px;
            background-color: $color-background;
            margin-left: 35px;
            position: relative;
            top: 7px;
          }
          .error{
            padding-left: 0px;
          }
        }
        .error{
          padding-left: 55px;
          margin: 10px 0;
          color: $color-sub-theme;
        }
        .my-btn{
          width: 390px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: $color-text-ll;
          margin: 10px auto auto 55px;
          background-color: $color-background-t;
        }
      }
    }
</style>
