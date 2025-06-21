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
          image: 'https://d2v6npc8wmnkqk.cloudfront.net/storage/tinymce/tfkKsKyJaawDVq3L1h2hE2H4jODTQ0lXWbqh4TDt.webp',
          caption: 'Diskon Spesial Minggu Ini!'
        },
        {
          image: 'https://www.lapakgaming.com/blog/en-ph/wp-content/uploads/2025/06/LG-SEA-1448x520-HB-Genshin-SKIRK.png',
          caption: 'Dapatkan Skirk dengan Top-up Welkin!'
        },
        {
          image: 'https://pic.bittopup.com/apiUpload/ee9b12c63c475467ab54d5ecd67ecd07.webp?imageView2/0/w/2200/h/960/format/webp/ignore-error/1',
          caption: 'Top-up PUBG MOBILE Sekarang!'
        }
      ]
    };
  }
};
</script>

<style scoped>
.main-carousel {
  width: 100%;
  max-width: 2000px;
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
