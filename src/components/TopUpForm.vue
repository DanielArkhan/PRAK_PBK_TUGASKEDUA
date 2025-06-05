<template>
  <form class="card">
    <label>
      Username:
      <input type="text" v-model="username" />
    </label>
    <br />
    <label>
      Pilih Paket:
      <select v-model="selectedPackage" required>
        <option disabled value="">--Pilih Paket--</option>
        <option v-for="pkg in packages" :key="pkg.id" :value="pkg">
          {{ pkg.name }} - Rp{{ pkg.price }} </option>
      </select>
    </label>
    <br />
    <button type="submit">Top-Up Sekarang</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      selectedPackage: '',
      packages: [
        { id: 1, name: '50 GC', price: 5000 },
        { id: 2, name: '120 GC', price: 10000 },
        { id: 3, name: '250 GC', price: 20000 }
      ]
    }
  }
}
</script>