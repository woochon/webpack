<template>
    <div class="app">
        {{msg}}
        <router-link to="/account">Account</router-link>
        <router-link to="/goodList">goodList</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:'app',
        data(){
            return {
                msg:'app组件'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .app{
        color: red;
        margin: 10px 30px;
    }
</style>
