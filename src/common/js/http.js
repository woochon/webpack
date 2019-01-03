import request from './axios';
const url = 'http://localhost:3000/';
/* 文章模块 */
const article_url={
    getCategory:'getCategoryList'
};
console.log(url+article_url.getCategory);
export const getCategoryList = params =>request(url+article_url.getCategory,'get',params);
