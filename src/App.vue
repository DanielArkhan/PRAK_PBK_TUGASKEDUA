<template>
  <div>
    <Header />
    <main class="container">
      <router-view @success="showSuccess" />
      <Notification
        v-if="success"
        :username="notifData.username"
        :packageName="notifData.packageName"
        :paymentMethod="notifData.paymentMethod"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Notification from './components/Notification.vue';

export default {
  components: { Header, Footer, Notification },
  data() {
    return {
      success: false,
      notifData: {
        username: '',
        packageName: '',
        paymentMethod: ''
      }
    };
  },
  methods: {
    showSuccess(data) {
      this.notifData = data;
      this.success = true;

      setTimeout(() => {
        this.success = false;
      }, 3000);
    }
  }
};
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
