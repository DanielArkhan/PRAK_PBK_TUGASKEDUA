<template>
  <div class="notif">
    <template v-if="type === 'topup'">
      ✅ Top-up untuk <b>{{ username }}</b> sejumlah <b>{{ packageName }}</b> berhasil via <b>{{ paymentMethod }}</b>!
    </template>
    <template v-else-if="type === 'login'">
      ✅ Berhasil login sebagai <b>{{ username }}</b>!
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'topup'
    },
    username: String,
    packageName: String,
    paymentMethod: String
  }
}
</script>

<style scoped>
.notif {
  background-color: #d1fae5;
  color: #065f46;
  padding: 16px;
  margin-top: 20px;
  border: 2px solid #10b981;
  border-radius: 12px;
  text-align: center;
  box-shadow: 3px 3px 0px #000;
}
</style>
