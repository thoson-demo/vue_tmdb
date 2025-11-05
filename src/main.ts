import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // ✅ Import từ ./router/index.ts

const app = createApp(App);
app.use(router);
app.mount("#app");
