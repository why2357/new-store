import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import request from './intercept'
import Login from './components/login.vue';



const app = createApp(App); // 创建应用实例
app.component('Login', Login); // 注册组件
app.use(router); // 使用路由
app.mount('#app'); 
