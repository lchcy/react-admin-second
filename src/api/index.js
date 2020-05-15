/* 
包含应用中所有请求接口的函数：接口请求函数
函数的返回值都是promise对象
*/
import jsonp from 'jsonp';//axios不能发jsonp请求
// import qs from 'qs'
import ajax from './ajax';
import { message } from 'antd';
// import Search from 'antd/lib/input/Search';
// import axios from './ajax';

const BASE = ''

//请求登录
export function reqLogin(username, password) {
    ajax({
        method: 'post',
        url: BASE + '/login',
        data: { //data是对象，默认使用json格式的请求体携带参数
            username,
            password
        }
        // data:qs.stringify({username,password})
    })
};
const name = 'tom';
const pwd = '123';
reqLogin(name, pwd);
//将实参数据赋值形参变量

//发送jsonp请求得到天气信息
export const reqWeather = (city) => {
    //执行器函数：内部去执行异步任务，
    //成功了调用resolve()，失败了不调用reject()，直接提示错误
    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
        jsonp(url, {}, (error, data) => {
            if (!error && data.error === 0) {//成功的
                const { dayPictureUrl, weather } = data.results[0].weather_data[0];
                resolve({ dayPictureUrl, weather });
            } else {//失败的
                message.error('获取天气信息失败');
            };
        });
    });
    ;
};

//获取分类列表
// export const reqCategorys =()=> ajax.get(BASE + '/mange/category/list')
/*  export const reqCategorys =()=> ajax({
     // method:'GET',
     url:BASE + '/mange/category/list'
 }) */
export const reqCategorys = () => ajax(BASE + '/mange/category/list');

//添加分类
export const reqAddCategory = (categoryName) => ajax.post(BASE + '/manage/category/add', { categoryName });
//修改分类
export const reqUpdateCategory = ({ categoryId, categoryName }) => ajax.post(BASE + '/manage/category/update', { categoryId, categoryName });


//根据分类id获取分类
export const reqCategory = (categoryId) => ajax(BASE + '/manage/category/info', {
    params: {
        categoryId
    }
})

/* 获取商品分页列表 */
export const reqProducts = (pageNum, pageSize) => ajax(BASE + '/manage/product/list', {
    params: {//包含所有query的对象
        pageNum,
        pageSize
    }
});
/* 根据name/desc搜索产品分页列表 */
export const reqSearchProducts = ({
    pageNum,
    pageSize,
    searchName,
    searchType//它的值是'productName'或者'productDesc'
}) => ajax(BASE + '/manage/product/search', {
    // method:'GET'
    params: {
        pageNum,
        pageSize,
        [searchType]: searchName,

    }
});

/* 对商品进行上架/下架处理 */
export const reqUpdateStatus = (productId, status) => ajax(BASE + '/manage/product/updateStatus', {
    method: 'POST',
    data: {
        productId,
        status
    }
})
// ajax.post(BASE + '/manage/product/updateStatus',{
//     productId,
//     status
// })
