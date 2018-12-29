<template>
    <div class="nav-list">
        {{msg}}
    </div>
</template>
<script>
    export default{
        name:'delList',
        data(){
            return {
                msg:'删除导航'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .nav-list{
        color: yellow;
    }
</style>
