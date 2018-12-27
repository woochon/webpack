<template>
    <div class="count">
        count
        <p>
            <router-link to="/account/login">登录</router-link>
            <router-link to="/account/register">注册</router-link>
        </p>
    </div>
</template>
<script>
    export default {
        name:'count',
        data(){
            return {

            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .count{
        background-color: gray;
        padding: 10px;
        font-size: 14px;
    }
</style>
