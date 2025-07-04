import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: [],
    isLoading: false,
    error: null
  }),
  actions: {
    async fetchOrders() {
      this.isLoading = true
      try {
        const res = await axios.get('http://localhost:3000/orders')
        this.orders = res.data
      } catch (err) {
        this.error = err
        console.error('Gagal mengambil data order:', err)
      } finally {
        this.isLoading = false
      }
    },
    async addOrder(orderData) {
      try {
        const res = await axios.post('http://localhost:3000/orders', orderData)
        this.orders.push(res.data)
      } catch (err) {
        this.error = err
        console.error('Gagal menambahkan order:', err)
      }
    }
  }
})