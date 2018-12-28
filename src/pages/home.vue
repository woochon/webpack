<template>
  <div class="home-page">
    <div class="m-header">
      <div class="left">
        <span class="glyphicon glyphicon-th-list menu"></span>
        <div class="logo">
          <img src="../images/logo.jpg" alt="" class="img">
          <h2 class="description">cms内容管理系统</h2>
        </div>
      </div>
      <div class="right">
        <img src="../images/dojo.png" alt="头像" class="agv">
        <span class="name">woochon</span>
      </div>
    </div>
    <div class="m-main">
      <div class="left">
        <leftNav></leftNav>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import leftNav from 'components/leftNav';
export default {
  name:"Count",
  data(){
    return {

    };
  },
    components:{
      leftNav
    }
};
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../common/scss/index';
  @import '../common/scss/variable';
  .home-page{
    .m-header{
      height: 88px;
      line-height: 88px;
      background-color: $color-background;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .left,.right{
        height: 100%;
        display: flex;
        align-items: center;
      }
      .left{
        .menu{
          font-size: $font-size-large-xx;
          color: $color-text-ll;
          margin-left: 20px;
        }
        .logo{
          width: 350px;
          height: 45px;
          position: relative;
          margin-left: 40px;
          .img{
            width: 350px;
            height: 45px;
          }
          .description{
            position: absolute;
            top: 0;
            left: 0;
            z-index: -999;
          }
        }
      }
      .right{
        .agv{
          width: 40px;
          height: 40px;
          margin-right: 20px;
        }
        .name{
          font-size: $font-size-large-x;
          color: $color-text-ll;
        }
      }
    }
    .m-main{
      display: flex;
      justify-content: space-between;
      align-items: start;
      .left{
        flex: 0 0 180px;
      }
      .right{
        flex: 1;
        min-width: 900px;
        background-color: red;
        height: 1200px;
      }
    }

  }
</style>
