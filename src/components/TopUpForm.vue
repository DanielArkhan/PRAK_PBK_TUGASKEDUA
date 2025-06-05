<template>
  <form @submit.prevent="submitForm">
    <label>Username</label>
    <input v-model="username" placeholder="Enter your ID" />

    <label>Pilih Nominal</label>
    <div class="card-group">
      <div
        v-for="option in packages"
        :key="option.name"
        class="card-option"
        :class="{ selected: packageName === option.name }"
        @click="packageName = option.name"
      >
        {{ option.name }}
        <!-- Tampilkan harga kalau kartu ini terpilih -->
        <div v-if="packageName === option.name" class="price-tag">
          Harga: Rp {{ option.price.toLocaleString() }}
        </div>
      </div>
    </div>

    <label>Metode Pembayaran</label>
    <div class="card-group">
      <div
        v-for="method in paymentMethods"
        :key="method.name"
        class="card-option"
        :class="{ selected: paymentMethod === method.name }"
        @click="paymentMethod = method.name"
      >
        {{ method.name }}
        <div v-if="paymentMethod === method.name" class="price-tag">
          {{ method.detail }}
        </div>
      </div>
    </div>

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
      // Paket dengan harga
      packages: [
        { name: '60 Crystals', price: 10000 },
        { name: '300 + 30 Crystals', price: 55000 },
        { name: '6480 + 1600 Crystals', price: 1080000 }
      ],
      // Metode pembayaran dengan detail (bisa harga atau deskripsi)
      paymentMethods: [
        { name: 'QRIS', detail: 'Bayar via QR Code' },
        { name: 'Bank Transfer', detail: 'Transfer manual via bank' },
        { name: 'OVO', detail: 'Bayar dengan OVO' }
      ]
    };
  },
  methods: {
    submitForm() {
      if (!this.username || !this.packageName || !this.paymentMethod) {
        alert('Lengkapi semua data!');
        return;
      }
      this.$emit('success', {
        username: this.username,
        packageName: this.packageName,
        paymentMethod: this.paymentMethod
      });
      this.username = '';
      this.packageName = '';
      this.paymentMethod = '';
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.card-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.card-option {
  padding: 10px 16px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: relative;
}

.card-option:hover {
  background-color: #f9f9f9;
}

.card-option.selected {
  border: 2px solid #4d3eff;
  background-color: #f0f0ff;
}

.price-tag {
  margin-top: 8px;
  font-size: 14px;
  color: #4d3eff;
  font-weight: 600;
}

button {
  background-color: #4d3eff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
}
</style>
