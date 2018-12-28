<template>
  <div class="app">
    {{ msg }}
    <img
      src="./images/dojo.png"
      alt=""
    >
    <img
      src="./images/dojo.png"
      alt=""
    >
    <RouterLink to="/account">
      Account
    </RouterLink>
    <RouterLink to="/goodList">
      goodList
    </RouterLink>
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
<style lang="scss" type="text/scss" scoped>
    .app{
        color: red;
        margin: 10px 30px;
    }
</style>
