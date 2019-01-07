import Vue from "vue";
import App from "./app.vue";
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AES from "./common/js/crypto";
/*import '../ueditor1_4_3_3/ueditor.config';
import '../ueditor1_4_3_3/ueditor.all';
import '../ueditor1_4_3_3/zh-cn/zh-cn';
import '../ueditor1_4_3_3/ueditor.parse';*/

Vue.prototype.$decrypt=AES.Decrypt;
Vue.prototype.$encrypt=AES.Encrypt;



var vm = new Vue({
  el:"#app",
  data:{
    msg:"123"
  },
  router,
  render:h=>h(App)
});
