// import axios from 'axios'

// // 添加请求拦截器，把token传给后端
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     const token =localStorage.getItem(token)
//     console.log (token)
//     console.log('请求拦截器啊实打实大苏打实打实大苏打为')
//     if(token) config.headers.Authorization = `Bearer${token}`
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     console.log("响应拦截器的错误"+this.error)//这个this不知道对不对
//     return Promise.reject(error);
//   });



// // 添加响应拦截器，判断后端状态码是401吗
// axios.interceptors.response.use(function (response) {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么

//     console.log(response.request.status)
//     return response;
//   }, function (error) {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });


// export default ;