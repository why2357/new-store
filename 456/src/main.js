import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import request from './intercetp'

createApp(App).use(router).mount('#app')
