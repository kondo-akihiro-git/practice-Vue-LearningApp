import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// ルーターをアプリケーションに登録
app.use(router);

app.mount("#app");
