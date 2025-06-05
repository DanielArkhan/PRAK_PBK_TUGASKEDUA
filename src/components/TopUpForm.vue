<template>
  <form class="card" @submit.prevent="submitForm">
    <div class="form-group">
      <label>Username:</label>
      <input type="text" v-model="username" required />
    </div>

    <div class="form-group">
      <label>Pilih Paket:</label>
      <select v-model="selectedPackageId" required>
        <option disabled value="">--Pilih Paket--</option>
        <option v-for="pkg in packages" :key="pkg.id" :value="pkg.id">
          {{ pkg.name }} - Rp{{ pkg.price }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Metode Pembayaran:</label>
      <select v-model="selectedPayment" required>
        <option disabled value="">--Pilih Metode Pembayaran--</option>
        <option v-for="method in paymentMethods" :key="method.id" :value="method.name">
          {{ method.name }}
        </option>
      </select>
    </div>

    <button type="submit">Top-Up Sekarang</button>
  </form>
</template>

<script>
export default {
  data() {
  return {
    username: '',
    selectedPackageId: '',
    selectedPackage: null,
    selectedPayment: '',
      packages: [
        { id: 1, name: '50 GC', price: 5000 },
        { id: 2, name: '120 GC', price: 10000 },
        { id: 3, name: '250 GC', price: 20000 }
      ],
      paymentMethods: [
        { id: 'credit', name: 'Credit Card' },
        { id: 'paypal', name: 'PayPal' },
        { id: 'bank', name: 'Bank Transfer' }
      ]
    }
  },
  methods: {
    submitForm() {
      this.selectedPackage = this.packages.find(pkg => pkg.id === this.selectedPackageId)

      if (!this.username || !this.selectedPackage || !this.selectedPayment) return;

      this.$emit('success', {
        username: this.username,
        packageName: this.selectedPackage.name,
        paymentMethod: this.selectedPayment
      });

      this.username = '';
      this.selectedPackage = null;
      this.selectedPackageId = '';
      this.selectedPayment = '';
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #fff2cc;
  border-radius: 20px;
  padding: 16px;
  margin: 10px 0;
  box-shadow: 4px 4px 0px #000;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
}

input, select {
  padding: 8px;
  border-radius: 6px;
  border: 2px solid #ffb347;
  width: 100%;
  box-sizing: border-box;
}

button {
  background-color: #ff5c5c;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
}
button:hover {
  background-color: #e44d4d;
}
</style>
