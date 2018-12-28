<template>
  <div class="login">
    <div class="title">
      <h2>CMS管理系统</h2>
      <p class="desc">CMS management System</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name:"Login",
  data(){
    return {

    };
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
          font-size: $font-size-medium_x;
        }
      }
    }
</style>
