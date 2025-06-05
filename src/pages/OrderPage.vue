<template>
  <div class="order-page">
    <h1>Top Up {{ gameName }}</h1>
    <TopUpForm @success="showNotification" />
    <Notification v-if="success" v-bind="notifData" />
  </div>
</template>

<script>
import TopUpForm from '../components/TopUpForm.vue'
import Notification from '../components/Notification.vue'

export default {
  components: { TopUpForm, Notification },
  props: ['game'],
  data() {
    return {
      success: false,
      notifData: {},
    }
  },
  computed: {
    gameName() {
      const map = {
        genshin: 'Genshin Impact',
        ml: 'Mobile Legends',
        hsr: 'Honkai Star Rail'
      }
      return map[this.game] || 'Game'
    }
  },
  methods: {
    showNotification(data) {
      this.notifData = data
      this.success = true
      setTimeout(() => (this.success = false), 3000)
    }
  }
}
</script>

<style scoped>
.order-page {
  padding: 24px;
  max-width: 600px;
  margin: auto;
}
</style>
