<!-- src/views/OrderView.vue -->
<template>
  <div class="order-view">
    <h1 class="title">Daftar Pesanan</h1>

    <div v-if="isLoading" class="loading">Loading...</div>

    <div v-else-if="orders.length" class="order-list">
      <div v-for="order in orders" :key="order.id" class="order-card">
        <h3>{{ order.username }}</h3>
        <p><strong>Game:</strong> {{ order.game || '-' }}</p>
        <p><strong>Paket:</strong> {{ order.packageName }}</p>
        <p v-if="order.price"><strong>Harga:</strong> Rp{{ order.price.toLocaleString() }}</p>
        <p><strong>Metode Pembayaran:</strong> {{ order.paymentMethod }}</p>
        <p><strong>Status:</strong> {{ order.status }}</p>
        <p><strong>Tanggal:</strong> {{ formatDate(order.date) }}</p>
      </div>
    </div>

    <p v-else>Tidak ada pesanan ditemukan.</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '../stores/orderStore'
import { computed } from 'vue'

const store = useOrderStore()

onMounted(() => {
  store.fetchOrders()
})

const orders = computed(() => store.orders)
const isLoading = computed(() => store.isLoading)

function formatDate(dateString) {
  const d = new Date(dateString)
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.order-view {
  padding: 24px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #4d3eff;
}

.loading {
  font-size: 18px;
  color: #888;
  margin-top: 30px;
}

.order-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.order-card {
  width: 280px;
  background: #f0f0ff;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.order-card h3 {
  margin-top: 0;
  color: #333;
}
</style>