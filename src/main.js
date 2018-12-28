import Vue from "vue";
import App from "./app.vue";
import router from './router';
import 'normalize.css'


var vm = new Vue({
  el:"#app",
  data:{
    msg:"123"
  },
  router,
  render:h=>h(App)
});
