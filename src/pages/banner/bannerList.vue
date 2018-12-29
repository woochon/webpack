<template>
    <div class="user-list">
        {{msg}}
    </div>
</template>
<script>
    export default{
        name:'banner',
        data(){
            return {
                msg:'轮播图列表'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .user-list{
        color: yellow;
    }
</style>
