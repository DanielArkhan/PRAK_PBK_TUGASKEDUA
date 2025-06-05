import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import OrderPage from '../pages/OrderPage.vue';
import Pricelist from '../views/PriceList.vue';
import ContactUs from '../views/ContactUs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order/:game?',
    name: 'OrderPage',
    component: OrderPage,
    props: true
  },
  {
    path: '/pricelist/:game?',
    name: 'Pricelist',
    component: Pricelist,
    props: true
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
