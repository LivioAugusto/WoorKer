import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homepage.vue';
import CategoriesPage from '../views/CategoriesPage.vue';
import FreelancerInfo from '../views/FreelancerInfo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/categorias',
    name: 'Categories',
    component: CategoriesPage,
  },
  {
    path: '/freelancers/:id',
    name: 'FreelancerInfo',
    component: FreelancerInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;