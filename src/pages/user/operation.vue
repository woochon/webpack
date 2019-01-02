<template>
    <div class="operation">
        <div class="state-0" v-if="state===0">
            <span>激活</span>
            <span>删除</span>
        </div>
        <div class="state-1" v-else>
            <span>禁止</span>
            <span>编辑</span>
        </div>
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
            state:{
                require:true,
                type:Number
            }
        },
        created(){
            console.log(this.state,'created');
        },
        mounted(){
            console.log(this.state,'mounted');
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .operation{

    }
</style>
