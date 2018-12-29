<template>
    <div class="nav-list">
        {{msg}}
    </div>
</template>
<script>
    export default{
        name:'menuNav',
        data(){
            return {
                msg:'导航列表'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .user-list{
        color: yellow;
    }
</style>
