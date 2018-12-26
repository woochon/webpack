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
