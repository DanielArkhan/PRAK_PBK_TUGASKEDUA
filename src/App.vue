<template>
  <div>
    <Header :isAdmin="isAdmin" />
    <main class="container">
      <!-- ✅ FIXED: Hilangkan slot -->
      <router-view @success="showSuccess" />

      <Notification
        v-if="success"
        :type="notifData.type"
        :username="notifData.username"
        :packageName="notifData.packageName"
        :paymentMethod="notifData.paymentMethod"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Notification from './components/Notification.vue'
import { useUserStore } from './stores/userStore'

export default {
  components: { Header, Footer, Notification },
  data() {
    return {
      success: false,
      notifData: {
        type: '',
        username: '',
        packageName: '',
        paymentMethod: ''
      }
    }
  },
  computed: {
    isAdmin() {
      const store = useUserStore()
      return store.username === 'admin'
    }
  },
  methods: {
    showSuccess(data) {
      console.log('[App.vue] showSuccess called with:', data)
      this.notifData = {
        type: data.type || 'topup',
        username: data.username,
        packageName: data.packageName || '',
        paymentMethod: data.paymentMethod || ''
      }
      this.success = true
      setTimeout(() => {
        this.success = false
      }, 3000)
    }
  }
}
</script>

<style>
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
body {
  font-family: 'Poppins', sans-serif;
}
</style>