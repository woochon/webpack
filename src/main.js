import Vue from "vue";
import App from "./app.vue";
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';



var vm = new Vue({
  el:"#app",
  data:{
    msg:"123"
  },
  router,
  render:h=>h(App)
});
