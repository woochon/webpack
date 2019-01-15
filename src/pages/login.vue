<template>
  <div class="login">
    <div class="title">
      <h2>CMS管理系统</h2>
      <p class="desc">CMS management System</p>
    </div>
    <div class="main-wrapper">
      <div class="item">
        <label for="email">邮　箱:</label>
        <input type="text" id="email" class="theme" placeholder="请输入邮箱" v-model="email" @blur="validateUser">
      </div>
      <div class="item">
      <label for="pwd">密　码:</label>
      <input type="password" id="pwd" class="theme" placeholder="请输入密码" v-model="password" @blur="validatePwd">
    </div>
      <div class="item">
        <label for="re_PWD">验证码:</label>
        <input type="text" id="re_PWD" class="theme special" placeholder="请输入验证码" v-model="identify" @blur="validateIdentify">
        <!--<img class="identify" src="http://localhost:3000/getIdentityCode">-->
        <span v-html="tmpIdentify" class="identify" @click="getCode"></span>
      </div>
      <div class="error">
        {{warmMsg}}
      </div>
      <div class="btn-wrapper">
        <div class="my-btn" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { getIdentityCode,login } from "common/js/http";
  import { isEmpty,validate } from "common/js/dom";
  import  tools  from 'common/js/tools';
  export default {
  name:"Login",
  data(){
    return {
       warmMsg:'',
       email:'',
       password:'',
       identify:'',
        tmpIdentify:'',
        codeText:''
    };
  },
  created(){
      /*console.log(this.$route.query.data);
      const tmp=this.$route.query.data;*/
      /*console.log(this.$decrypt(tmp));
      console.log(typeof(tmp),'======');*/
      this.getCode();
  },
  methods:{
      getCode(){
          /* 发送请求获取验证码 */
          getIdentityCode().then((res)=>{
              console.log(res);
              this.tmpIdentify = res.data;
              this.codeText = res.text;
          });
      },
      validateUser(){
          this.warmMsg='';
          if(isEmpty(this.email)){
             this.warmMsg='邮箱不能为空';
             return false;
          }
          let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
          if(!validate(this.email,reg)){
              this.warmMsg='邮箱格式不正确';
              return false;
          }
          return true;
      },
      validatePwd(){
          this.warmMsg='';
          if(isEmpty(this.password)){
              this.warmMsg='密码不能为空';
              return false;
          }
          const reg = /^[\x21-\x7e]{6,12}$/;
          if(!validate(this.password,reg)){
              this.warmMsg='密码格式不正确';
              return false;
          }
          return true;
      },
      validateIdentify(){
          this.warmMsg='';
          if(isEmpty(this.identify)){
              this.warmMsg='验证码不能为空';
              return false;
          }
          const reg = /^[0-9a-zA-Z]{4}$/;
          if(!validate(this.identify,reg)){
              this.warmMsg='验证码格式不正确';
              return false;
          }
          return true;
      },
      login(){
          console.log('login');
          if(this.validateUser()&&this.validatePwd()&&this.validateIdentify()){
              if(this.codeText.toLocaleLowerCase() !==this.identify.toLowerCase()){
                  this.warmMsg='验证码不正确';
                  return ;
              }
             login({
                 userName:this.email,
                 password:tools.md5(this.password),
                 identify:this.identify
             }).then(res=>{
                 console.log(res);
                 if(res.code===0){
                     this.$router.push({path:'/home/personCenter'});
                 }else{
                     this.warmMsg=res.message;
                 }
             })
          }

      }
  }
};
</script>
<style lang="scss" type="text/scss" scoped>
  @import '../common/scss/variable';
    .login{
      position: absolute;
      width: 500px;
      height: 350px;
      top: 50%;
      left: 50%;
      background-color: #fff;
      transform: translate(-50%,-50%);
      .title{
        text-align: center;
        color: $color-theme;
        font-size: $font-size-large-xx;
        font-weight: bold;
        .desc{
          margin-top: 10px;
          font-size: $font-size-medium_x;
        }
      }
      .main-wrapper{
        padding: 20px 0;
        .item{
          padding: 5px 0;
          line-height: 24px;
          text-align: center;
          .theme{
            width: 340px;
            border-radius: 3px;
            border:1px solid gray;
            outline: none;
            padding-left: 12px;
            &.special{
              width: 200px;
            }
            &:active{/*文本框获取激活时的样式*/
              border:1px solid $color-sub-theme;
            }
            &:focus{/*文本框获取焦点时的样式*/
              border:1px solid $color-sub-theme;
            }
          }
          .identify{
            display: inline-block;
            width: 100px;
            height: 24px;
            background-color: $color-background;
            margin-left: 35px;
            position: relative;
            top: 7px;
            cursor: pointer;
          }
          .error{
            padding-left: 0px;
          }
        }
        .error{
          padding-left: 55px;
          margin: 10px 0;
          color: $color-sub-theme;
        }
        .my-btn{
          width: 390px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: $color-text-ll;
          margin: 10px auto auto 55px;
          background-color: $color-background-t;
        }
      }
    }
</style>
