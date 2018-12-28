<template>
  <div id="app">
    <!--<router-link to="/">登录</router-link>
    <router-link to="/home">首页</router-link>-->
    <RouterView />
  </div>
</template>
<script>
export default{
  name:"App",
  data(){
    return {
      msg:"app组件"
    };
  }
};
</script>
<style lang="scss" type="text/scss">
  @import './common/scss/index';
  body{
    background-color: #fff;
  }
  #app{
    min-height: 500px;
    width: 1500px;
    background-color: #2c3f55;
    margin: 0 auto;
  }
</style>
