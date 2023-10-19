import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import request from './intercetp'
import Login from './components/login.vue';


// createApp(App).use(router).mount('#app')
const app = createApp(App); // 创建应用实例
app.component('Login', Login); // 注册组件
app.use(router); // 使用路由
app.mount('#app'); 