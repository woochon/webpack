<template>
  <div class="count">
    count
    <p>
      <RouterLink to="/account/login">
        登录
      </RouterLink>
      <RouterLink to="/account/register">
        注册
      </RouterLink>
    </p>
  </div>
</template>
<script>
export default {
  name:"Count",
  data(){
    return {

    };
  }
};
</script>
<style lang="scss" type="text/scss" scoped>
    .count{
        background-color: gray;
        padding: 10px;
        font-size: 14px;
    }
</style>
