<template>
  <div class="card">
    <img :src="game.image" :alt="game.name" />
    <h3>{{ game.name }}</h3>
    <button @click.stop="onTopUpClick">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
    prices: Array,
    buttonText: {
      type: String,
      default: 'Top Up'
    }
  },
  methods: {
    onTopUpClick() {
      if (this.$route.name === 'Home') {
        // Navigasi ke halaman order jika di halaman Home
        this.$router.push({ name: 'OrderPage', params: { game: this.game.name } });
      } else {
        // Emit event jika di halaman Pricelist
        this.$emit('show-prices', this.game.name);
      }
    }
  }
}
</script>

<style scoped>
.card {
  width: 180px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.03);
}

img {
  width: 100%;
  border-radius: 12px;
}

h3 {
  font-size: 16px;
  margin: 10px 0;
}

button {
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 10px;
}

.price-list {
  margin-top: 12px;
  text-align: left;
}

.price-list table {
  width: 100%;
  border-collapse: collapse;
}

.price-list th, .price-list td {
  padding: 6px;
  border: 1px solid #ccc;
  font-size: 12px;
}

.price-list th {
  background-color: #f5f5f5;
}
</style>
