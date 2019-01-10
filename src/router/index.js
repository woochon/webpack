import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Login from "pages/login.vue";
import NotFound from "pages/notFound.vue";
import Register from "pages/register.vue";
import Home from "pages/home.vue";
import User from "pages/register.vue";
import Manage from 'pages/user/userList'
import PersonCenter from 'pages/user/personCenter'
import Banner from 'pages/banner/bannerList'
import Nav from 'pages/nav/menuNav'
import DelNav from 'pages/nav/delList'
import ConList from 'pages/article/articleList'
import AddCon from 'pages/article/addCategory'
import AditArticle from 'pages/article/editArticle'
import Time from 'pages/statistical/time'
import Error from 'pages/statistical/error'
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
        /*{
            path:'/home',
            component:Home,
            redirect:'/home/index',
            children:[
                {
                    path:'index',
                    redirect:'/home/index/manage',
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
                }
            ]
        },*/
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
                    name:'list',
                    path:'conList',
                    component:ConList
                },
                {
                    name:'add',
                    path:'addCon',
                    component:AddCon
                },
                {
                    name:'edit',
                    path:'editCon',
                    component:AditArticle
                }
            ]
        },
        {
            path:"/statistical",
            component:Home,
            redirect:'/conManage/time',
            children:[
                {
                    name:'time',
                    path:'time',
                    component:Time
                },
                {
                    name:'error',
                    path:'error',
                    component:Error
                }
            ]
        },
        {
            path:'*',
            component:NotFound
        }
    ]
});
/*router.beforeEach((to, from, next) =>{
    /!* eslint-disable *!/
    window.logInfo = {};  //统计页面加载时间
    window.logInfo.mobile = mobileType();
    function mobileType() {
        var u = navigator.userAgent, app = navigator.appVersion;
        var type =  {// 移动终端浏览器版本信息
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            iPad: u.indexOf('iPad') > -1, //是否iPad
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //是否为移动终端
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
        var lists = Object.keys(type);
        for(var i = 0; i < lists.length; i++) {
            if(type[lists[i]]) {
                return lists[i];
            }
        }
    }
    window.logInfo.openTime = performance.timing.navigationStart;
    window.logInfo.whiteScreenTime = +new Date() - window.logInfo.openTime;
    document.addEventListener('DOMContentLoaded',function (event) {
        window.logInfo.readyTime = +new Date() - window.logInfo.openTime;
    });
    window.onload = function () {
        window.logInfo.allloadTime = +new Date() - window.logInfo.openTime;
        window.logInfo.nowTime = new Date().getTime();
        var timname = {
            whiteScreenTime: '白屏时间',
            readyTime: '用户可操作时间',
            allloadTime: '总下载时间',
            mobile: '使用设备',
            nowTime: '时间',
            url:'所在的路由'
        };
        var logStr = '';
        for (var i in timname) {
            console.warn(timname[i] + ':' + window.logInfo[i] + 'ms');
            if (i === 'mobile') {
                logStr += '&' + i + '=' + window.logInfo[i];
            } else {
                logStr += '&' + i + '=' + window.logInfo[i];
            }

        }
        console.log(location.href);
        let tmpStr = location.href.replace(/http:\/\/localhost:8000\//,'');
        console.log(tmpStr);
        /!*(new Image()).src = '/action?' + logStr;*!/
        console.log(logStr);
        /!*throw new Error('hehehe');*!/
    };

    var defaults = {
        msg:'',  // 错误的具体信息
        url:'',  // 错误所在的url
        line:'', // 错误所在的行
        col:'',  // 错误所在的列
        nowTime: '',// 时间
    };
    window.onerror = function(msg,url,line,col,error) {
        col = col || (window.event && window.event.errorCharacter) || 0;

        defaults.url = url;
        defaults.line = line;
        defaults.col = col;
        defaults.nowTime = new Date().getTime();

        if (error && error.stack) {
            // 如果浏览器有堆栈信息，直接使用
            defaults.msg = error.stack.toString();

        } else if (arguments.callee) {
            // 尝试通过callee拿堆栈信息
            var ext = [];
            var fn = arguments.callee.caller;
            var floor = 3;
            while (fn && (--floor > 0)) {
                ext.push(fn.toString());
                if (fn === fn.caller) {
                    break;
                }
                fn = fn.caller;
            }
            ext = ext.join(",");
            defaults.msg = error.stack.toString();
        }
        var str = ''
        for (var i in defaults) {
            // console.log(i,defaults[i]);
            if (defaults[i] === null || defaults[i] === undefined) {
                defaults[i] = 'null';
            }
            str += '&' + i + '=' + defaults[i].toString();
        }
        str = str.replace('&', '').replace('\n', '').replace(/\s/g, '');
        console.log(str);
        (new Image()).src = '/error?' + str;
    };
    /!* eslint-enable *!/
   next();
});*/

/* 面包屑 */
/*let routeList = [];
router.beforeEach((to, from, next) => {
    let index = routeList.indexOf(to.name);
    if (index !== -1) {
        //如果存在路由列表，则把之后的路由都删掉
        routeList.splice(index + 1, routeList.length - index - 1)
        console.log(routeList,'00000')
    } else {
        console.log(to.name,'11111');
        routeList.push(to.name)
    }
    to.meta.routeList = routeList;
    next()
});*/
export default router;
