<template>
  <swiper
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3000 }"
    class="main-carousel"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image" :alt="slide.caption" class="banner" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slides: [
        {
          image: 'https://i.imgur.com/6U9r7CQ.jpg',
          caption: 'Diskon Spesial Minggu Ini!'
        },
        {
          image: 'https://i.imgur.com/zRztKKM.jpg',
          caption: 'Top Up Genshin Bonus 10%'
        },
        {
          image: 'https://i.imgur.com/6S0LgXc.jpg',
          caption: 'Bayar Mudah Pakai QRIS'
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-carousel {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 24px auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.banner {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
