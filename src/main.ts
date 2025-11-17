import { createApp } from 'vue'
import './style.css'
import './styles/variables.css' // ✅ Import để sử dụng biến CSS toàn cục
import './styles/utilities.css' // ✅ Import utilities
import App from './App.vue'
import router from './router' // ✅ Import từ ./router/index.ts

const app = createApp(App)
app.use(router)
app.mount('#app')
