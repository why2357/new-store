import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import request from './intercept'
import Login from './components/login.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App); // 创建应用实例
app.component('Login', Login); // 注册组件
app.use(router); // 使用路由
app.mount('#app'); 
app.use(ElementPlus)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })//size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级





