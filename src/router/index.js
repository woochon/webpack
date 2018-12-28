import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Login from "../pages/login.vue";
import Register from "../pages/register.vue";
import Home from "../pages/home.vue";
import User from "../pages/register.vue";
// console.log(process.env);
const router = new VueRouter({
    mode: 'history', //去掉路径上  的'#'
    routes:[
        {
            path:'/',
            component:Login,
        },
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:'user',
                    component:User
                }
            ]
        }
    ]
});
export default router;
