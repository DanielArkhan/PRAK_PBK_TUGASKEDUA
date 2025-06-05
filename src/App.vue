<template>
  <div class="container">
    <h1>Welcome to Coin Top-Up!</h1>
    <TopUpForm />
  </div>
</template>

<script>
import TopUpForm from './components/TopUpForm.vue'

export default {
  components: {
    TopUpForm
  }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

h1 {
  color: #ff5c5c;
  font-size: 32px;
  margin-bottom: 20px;
}
</style>
