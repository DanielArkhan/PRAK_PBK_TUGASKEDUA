import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import OrderPage from '../pages/OrderPage.vue';
import Pricelist from '../views/PriceList.vue';
import ContactUs from '../views/ContactUs.vue';
import OrderView from '../views/OrderView.vue';


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
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrderView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
