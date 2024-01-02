import { createPinia } from "pinia";
import { createApp } from "vue";
import store from './store/store'
import App from './app.vue'
const pinia=createPinia()
const app=createApp(App)
app.use(store)

app.mount('#app')