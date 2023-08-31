import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Router from './router/router'
import 'swiper/css';

const app = createApp(App)

app.use(Router)
app.use(ElementPlus)
app.mount('#app')
