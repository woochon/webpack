import request from './axios';
const url = 'http://localhost:3000/';
/* 文章模块 */
const article_url={
    getCategory:'getCategoryList',
    addCategory:'addCategory'
};
export const getCategoryList = params =>request(url+article_url.getCategory,'get',params);
export const addCategory = params =>request(url+article_url.addCategory,'post',params);
