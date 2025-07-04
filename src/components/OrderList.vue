<template>
  <div class="order-list">
    <h2 class="title">📝 Daftar Pesanan</h2>

    <div v-if="orderStore.isLoading" class="info">⏳ Sedang memuat data...</div>

    <div v-else-if="orderStore.error" class="error">
      ❌ Terjadi kesalahan: {{ orderStore.error.message }}
    </div>

    <ul v-else class="order-container">
      <li v-for="order in orderStore.orders" :key="order.id" class="order-card">
        <p><strong>{{ order.username }}</strong> memesan <em>{{ order.packageName }}</em></p>
        <p>Metode: {{ order.paymentMethod }} | Status: {{ order.status }}</p>
        <p>Tanggal: {{ formatDate(order.date) }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '../stores/orderStore'

const orderStore = useOrderStore()

onMounted(() => {
  orderStore.fetchOrders()
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleString('id-ID', {
    dateStyle: 'long',
    timeStyle: 'short'
  })
}
</script>

<style scoped>
.order-list {
  padding: 24px;
  text-align: center;
}

.title {
  font-size: 28px;
  color: #ff0000;
  margin-bottom: 16px;
}

.info {
  color: #4d3eff;
  font-weight: 500;
  margin: 16px 0;
}

.error {
  color: #d10000;
  background-color: #ffe0e0;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  margin: 16px 0;
}

.order-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
}

.order-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-left: 4px solid #4d3eff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: left;
}
</style>