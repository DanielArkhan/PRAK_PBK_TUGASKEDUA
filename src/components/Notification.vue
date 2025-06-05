<template>
  <div class="notif">
    ✅ Top-up untuk <b>{{ username }}</b> sejumlah <b>{{ packageName }}</b> berhasil via <b>{{ paymentMethod }}</b>!
  </div>
</template>

<script>
export default {
  props: ['username', 'packageName', 'paymentMethod']
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
