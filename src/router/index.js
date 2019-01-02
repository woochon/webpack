import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Login from "../pages/login.vue";
import Register from "../pages/register.vue";
import Home from "../pages/home.vue";
import User from "../pages/register.vue";
import Manage from '../pages/user/userList'
import PersonCenter from '../pages/user/personCenter'
import Banner from '../pages/banner/bannerList'
import Nav from '../pages/nav/menuNav'
import DelNav from '../pages/nav/delList'
import ConList from '../pages/article/articleList'
import AddCon from '../pages/article/addCategory'
import AditArticle from '../pages/article/editArticle'
// console.log(process.env);
const router = new VueRouter({
    mode: 'history', //去掉路径上  的'#'
    routes:[
        {
            path:'/',
            component:Login
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:"/home",
            component:Home,
            redirect:'/home/manage',
            children:[
                {
                    path:'manage',
                    component:Manage
                },
                {
                    path:'personCenter',
                    component:PersonCenter
                },
            ]
        },
        {
            path:"/nav",
            component:Home,
            redirect:'/nav/navList',
            children:[
                {
                    path:'navList',
                    component:Nav
                },
                {
                    path:'delList',
                    component:DelNav
                }
            ]
        },
        {
            path:"/banner",
            component:Home,
            redirect:'/banner/bannerList',
            children:[
                {
                    path:'bannerList',
                    component:Banner
                }
            ]
        },
        {
            path:"/conManage",
            component:Home,
            redirect:'/conManage/conList',
            children:[
                {
                    path:'conList',
                    component:ConList
                },
                {
                    path:'addCon',
                    component:AddCon
                },
                {
                    path:'editCon',
                    component:AditArticle
                }
            ]
        }
    ]
});
export default router;
