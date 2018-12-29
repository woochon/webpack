<template>
    <div class="person-center">
        {{msg}}
    </div>
</template>
<script>
    export default{
        name:'menuNav',
        data(){
            return {
                msg:'个人中心'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .personCenter{
        color: yellow;
    }
</style>
