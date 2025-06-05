<template>
  <form @submit.prevent="submitForm">
    <label>Username</label>
    <input v-model="username" placeholder="Enter your ID" />

    <label>Pilih Nominal</label>
    <select v-model="packageName">
      <option disabled value="">--Pilih--</option>
      <option v-for="option in packages" :key="option">{{ option }}</option>
    </select>

    <label>Metode Pembayaran</label>
    <select v-model="paymentMethod">
      <option disabled value="">--Pilih--</option>
      <option>QRIS</option>
      <option>Bank Transfer</option>
      <option>OVO</option>
    </select>

    <button type="submit">Bayar Sekarang</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      packageName: '',
      paymentMethod: '',
      packages: ['60 Crystals', '300 + 30 Crystals', '6480 + 1600 Crystals']
    }
  },
  methods: {
    submitForm() {
      if (!this.username || !this.packageName || !this.paymentMethod) {
        alert('Lengkapi semua data!')
        return
      }

      this.$emit('success', {
        username: this.username,
        packageName: this.packageName,
        paymentMethod: this.paymentMethod
      })

      this.username = ''
      this.packageName = ''
      this.paymentMethod = ''
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input, select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

button {
  background-color: #4d3eff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
}
</style>
