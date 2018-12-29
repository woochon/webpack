<template>
    <div class="operation">

    </div>
</template>
<script>
    export default{
        name:'operation',
        data(){
            return {

            }
        },
        props:{
            info:{
                require:true,
                type:Object
            }
        },
        mounted(){
            console.log(this.info);
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .operation{

    }
</style>