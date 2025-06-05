<template>
  <div class="card" @click="goToOrder">
    <img :src="game.image" :alt="game.name" />
    <h3>{{ game.name }}</h3>
    <button>Top Up</button>
  </div>
</template>

<script>
export default {
  props: ['game'],
  methods: {
    goToOrder() {
      this.$router.push(`/order/${this.game.route}`)
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
  background-color: #4d3eff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 10px;
}
</style>
