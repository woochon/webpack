<template>
  <div class="dialog-container" v-show="showDialog" ref="dialogBox" :class="extraClass">
    <div class="dialog-wrapper">
      <slot name="headers"></slot>
      <slot name="contents"></slot>
      <slot name="footers"></slot>
    </div>
  </div>
</template>
<script>
  export default{
    name:'dialogs',
    props:{
      value:{
        type:Boolean,
        default:false
      },
      cancel:{
        type:Function
      },
      scrollable:{
        type:Boolean,
        default:false
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
          // console.log('can scroll');
          document.body.style.overflow=''
        }else{
          // console.log("can't scroll");
          document.body.style.overflow='hidden';
        }
        /*  解决不允许滚动的时候页面滚动条消失的影响 */
        if(!newValue){
          if(!this.scrollable){
            document.body.style.overflow='';
            // console.log('123456');
          }
        }
      },
      showDialog(newValue){
        /* 查看是否有class-name属性，如果有将类名添加到dialog-container上 */
        if(newValue){
          // console.log(this.$refs.dialogBox.getAttribute('class-name'),'======');
          this.extraClass=this.$refs.dialogBox.getAttribute('class-name');
        }
        this.$emit('input',newValue);
      },
      scrollable(newValue){
        /*if(newValue){
          console.log('can scroll');
          document.body.style.overflowY='scroll'
        }else{
          console.log("can't scroll");
          document.body.style.overflowY='hidden';
        }*/
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
    },
    beforeDestroy(){
      document.body.style.overflow='scroll';
      console.log('123123123');
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
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
      width: 10px;
      height: 10px;
      /*overflow: hidden;*/
      background-color: #fff;
    }
  }
</style>
