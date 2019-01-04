export function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

export function addClass(obj, cls) {
    if (!hasClass(obj, cls)) obj.className += " " + cls;
}

export function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

export function toggleClass(obj,cls){
    if(hasClass(obj,cls)){
        removeClass(obj, cls);
    }else{
        addClass(obj, cls);
    }
}

export function validate(str,reg){
    return reg.test(str);
}

export function isEmpty(str){
    return str===''||(!str);
}