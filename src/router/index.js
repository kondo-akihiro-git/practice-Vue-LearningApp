import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Home.vue";
import AboutPage from "../components/About.vue";
import ContactPage from "../components/Contact.vue";

// ルート設定
const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
];

// ルーター作成
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
