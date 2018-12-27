// import Vue from '../node_modules/vue/dist/vue'; 方式1
// 方式2 在配置文件中修改vue包被导入的时候的路径
// import Vue from 'vue'
// 方式3
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import App from "./app.vue";
import Count from "./main/account.vue";
import GoodList from "./main/goodList.vue";
import Login from "./main/login.vue";
import Register from "./main/register.vue";
// console.log(process.env);
const router = new VueRouter({
  routes:[
    {
      path:"/account",
      component:Count,
      children:[
        {
          path:"login",
          component:Login
        },
        {
          path:"register",
          component:Register
        }
      ]
    },
    {
      path:"/goodList",
      component:GoodList
    }
  ]
});


var vm = new Vue({
  el:"#app",
  data:{
    msg:"123"
  },
  router,
  /*components:{
        App
    }*/
  /* 如果在runtime-only中想以标签的形式使用组件，用render函数 */
  /*render:function(createElements){
        return createElements(App)
    }*/
  /*render:(createElements)=>{
        return createElements(App)
    }*/
  /* 只有一个参数：省略（） */
  /*render:createElements=>{
        return createElements(App)
    }*/
  /* 简写形参 */
  /*render:h=>{
        return h(App)
    }*/
  /* 函数体只有一句代码 */
  /*render:h=> return h(App)*/
  /* 不写{},默认return  */
  render:h=>h(App)
});
