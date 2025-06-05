<template>
  <form class="card">
    <label>
      Username:
      <input type="text" v-model="username" />
    </label>
    <br />
    <label>
      Pilih Paket:
      <select>
        <option disabled selected>--Pilih Paket--</option>
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
      username: ''
    }
  }
}
</script>