<template>
  <div class="home-page">
    <div class="left">
      <leftNav></leftNav>
    </div>
    <div class="right">
      <router-view></router-view>
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
  .home-page{
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: start;
    .left{
      flex: 0 0 300px;
    }
    .right{
      flex: 1;
      min-width: 900px;
      background-color: red;
      height: 1200px;
    }
  }
</style>
