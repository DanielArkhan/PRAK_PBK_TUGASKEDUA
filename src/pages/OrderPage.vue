<template>
  <div class="order-page">
    <h2>Top Up: {{ gameNameFormatted }}</h2>
    <TopUpForm @success="$emit('success', $event)" />
  </div>
</template>

<script>
import TopUpForm from '../components/TopUpForm.vue';

export default {
  components: { TopUpForm },
  props: ['game'],
  computed: {
    gameNameFormatted() {
      const map = {
        genshin: 'Genshin Impact',
        ml: 'Mobile Legends',
        hsr: 'Honkai Star Rail'
      };
      return map[this.game] || 'Game';
    }
  }
};
</script>

<style scoped>
.order-page {
  padding: 20px;
  text-align: center;
}

h2 {
  color: #4d3eff;
  margin-bottom: 20px;
}
</style>
