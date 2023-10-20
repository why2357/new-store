import axios from 'axios'

const request = axios.create();

// 请求拦截器，请求拦截器发送token给后端验证，并且用响应拦截器保护页面
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) config.headers.Authorization = `Bearer${token}`;
        console.log("请求拦截器启动");
        return config;
    },
    (error) => {
        Promise.reject(error),
            console.log(error);
    }
)


axios.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log("响应拦截器启动");
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error);
});

export default request;