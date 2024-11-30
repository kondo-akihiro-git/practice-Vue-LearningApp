import { createRouter, createWebHistory } from 'vue-router';  // Vue 3用のインポート
import Dashboard from '../components/Dashboard.vue';
import Category from '../components/Category.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // Vue 3用の履歴モード
  routes,
});

export default router;
