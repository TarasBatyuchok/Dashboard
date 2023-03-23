import { createApp } from 'vue'
import App from './App.vue'
// import router
import router from './router'
// import css
import './assets/css/app.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
