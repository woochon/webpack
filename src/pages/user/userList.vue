<template>
    <div class="user-list">
        {{msg}}
    </div>
</template>
<script>
    export default{
        name:'manage',
        data(){
            return {
                msg:'管理员列表'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .user-list{
        color: yellow;
    }
</style>
