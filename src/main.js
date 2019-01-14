import Vue from "vue";
import App from "./app.vue";
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AES from "./common/js/crypto";
/*import '../ueditor1_4_3_3/ueditor.config';
import '../ueditor1_4_3_3/ueditor.all';
import '../ueditor1_4_3_3/zh-cn/zh-cn';
import '../ueditor1_4_3_3/ueditor.parse';*/

import {IdCodeValid} from  './common/js/idCard';
if(IdCodeValid('420983199106102435').pass){
    console.log('身份证号码符合要求');
}

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

/* eslint-disable */
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
    window.logInfo.url= location.href.replace(/http:\/\/localhost:8000\//,'');
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
    logStr=logStr.substring(1);
    /*(new Image()).src = '/action?' + logStr;*/
    console.log(logStr);
    /*throw new Error('hehehe');*/
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
/* eslint-enable */
