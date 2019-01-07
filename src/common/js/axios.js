import axios from 'axios';
import qs from 'qs';

export default function request(url, type, params) {
    console.log(params);
    if (type === 'post') {
        params=qs.stringify(params)
    }
    return axios({ url, method: type, data: params });
}

// 添加请求拦截器
/*
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) =>{
        Promise.reject(error)
    }
);
*/

// 添加响应拦截器
axios.interceptors.response.use(
    response =>{
        return response.data;
    },
    error =>{
        return Promise.reject(error);
    }
);
