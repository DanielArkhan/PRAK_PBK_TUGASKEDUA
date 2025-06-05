import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import OrderPage from '../pages/OrderPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/order/:game', name: 'OrderPage', component: OrderPage, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
