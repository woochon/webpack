<template>
    <div class="dialog-container" v-show="showDialog" ref="dialogBox" :class="extraClass">
        <div class="dialog-wrapper">
            <div class="content">
                {{message}}
            </div>
            <div class="btn-operation">
                <div class="my-btn extra-conform" @click="confirm(true)">确定</div>
                <div class="my-btn extra-cancel" @click="confirm(false)">取消</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'confirm',
        props:{
            value:{
                type:Boolean,
                default:false
            },
            scrollable:{
                type:Boolean,
                default:false
            },
            message:{
                type:String,
                default:'确定执行操作？'
            }
        },
        data(){
            return {
                showDialog:false,
                extraClass:'',
                tmpClass:'',
            }
        },
        watch:{
            value(newValue){
                this.showDialog=newValue;
                if(this.scrollable){
                    document.body.style.overflow=''
                }else{
                    document.body.style.overflow='hidden';
                }
                /*  解决不允许滚动的时候页面滚动条消失的影响 */
                if(!newValue){
                    if(!this.scrollable){
                        document.body.style.overflow='';
                    }
                }
            },
            showDialog(newValue){
                if(newValue){
                    this.extraClass=this.$refs.dialogBox.getAttribute('class-name');
                }
                this.$emit('input',newValue);
            }
        },
        mounted(){
            this.showDialog=this.value;
            /* 如果页面不允许滚动时，写在这里会导致在弹框没有出现的时候页面就没有滚动条 */
            /*if(this.scrollable){
              console.log('can scroll');
              document.body.style.overflowY='scroll'
            }else{
                  console.log("can't scroll");
                  document.body.style.overflowY='hidden';
              }*/
            /*this.headers=this.$slots.headers;
            this.contents=this.$slots.contents;
            this.footers=this.$slots.footers;*/
        },
        methods:{
            confirm(flag){
                // this.showDialog=false;
                this.$emit('confirm',flag);
            }
        },
        beforeDestroy(){
            document.body.style.overflow='scroll';
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    @import '../common/scss/variable';
    .dialog-container{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index:30;
        background-color:rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        .dialog-wrapper{
            width: 400px;
            height: 110px;
            overflow: hidden;
            background-color: #fff;
            .content{
                padding: 10px 30px;
                color: $color-sub-theme;
            }
            .btn-operation{
                display: flex;
                padding: 20px 0;
                justify-content: space-around;
                align-items: center;
                .my-btn{
                    background-color: $color-sub-theme;
                    color: $color-text;
                    width: 68px;
                    height: 28px;
                    border-radius: 5px;
                    cursor: pointer;
                    line-height: 28px;
                    text-align: center;
                }
            }
        }
    }
</style>
