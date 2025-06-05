<template>
  <div class="notification-card">
    ✅ Top-up untuk {{ username }} sejumlah {{ packageName }} berhasil via {{ paymentMethod }}!
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    packageName: String,
    paymentMethod: String
  }
}
</script>
