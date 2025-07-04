import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'swiper/swiper-bundle.css';
import { createPinia } from 'pinia'

createApp(App).use(router).mount('#app');
