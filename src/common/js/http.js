import request from './axios';
const url = 'http://localhost:3000/';

/* 用户模块 */
const user_url = {
    getIdentityCode:'getIdentityCode',
    login:'login'
};
export const getIdentityCode = params =>request(url+user_url.getIdentityCode,'get',params);
export const login = params =>request(url+user_url.login,'post',params);


/* 文章模块 */
const article_url={
    getCategory:'getCategoryList',
    addCategory:'addCategory',
    editorCategory:'editorCategory',
    removeCategory:'removeCategory'
};
export const getCategoryList = params =>request(url+article_url.getCategory,'post',params);
export const addCategory = params =>request(url+article_url.addCategory,'post',params);
export const editorCategory = params =>request(url+article_url.editorCategory,'post',params);
export const removeCategory = params =>request(url+article_url.removeCategory,'post',params);
