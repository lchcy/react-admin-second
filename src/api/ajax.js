/* 
封装的能发ajax请求的函数

*/

import axios from "axios";
import qs from 'qs'

// 添加请求拦截器 :让post请求的请求格式为urlencoded格式 a=1&b2
//在真正发请求前执行
axios.interceptors.request.use(function (config) {
    // 得到请求方式和请求体数据
    const {method,data} =config
    //处理post请求，将data对象转化成query参数格式字符串
    if(method.toLowerCase() === 'post' && typeof data==='object'){
        config.data=qs.stringify(data)
    }
    return config;
});

export default axios