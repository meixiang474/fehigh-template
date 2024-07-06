import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
// tailwind 已经重置了样式
// import 'reset-css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
