import { createApp } from 'vue'
import { createPinia } from "pinia";
import '@/style.css'
import App from '@/App.vue'
import router from "@/routes/main";


const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
