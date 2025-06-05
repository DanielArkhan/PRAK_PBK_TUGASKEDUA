<template>
  <div class="container">
    <h1>Welcome to Coin Top-Up!</h1>
    <TopUpForm @success="showSuccess" />
    <Notification v-if="success" />
  </div>
</template>

<script>
import TopUpForm from './components/TopUpForm.vue'
import Notification from './components/Notification.vue'

export default {
  components: {
    TopUpForm,
    Notification
  },
  data() {
    return {
      success: false
    }
  },
  methods: {
    showSuccess() {
      this.success = true
      setTimeout(() => this.success = false, 3000)
    }
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
