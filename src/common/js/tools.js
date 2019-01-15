const md5 = require('md5');
export default {
    type(obj){
        return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
    },
    md5(str){
        return md5(str);
    }
}