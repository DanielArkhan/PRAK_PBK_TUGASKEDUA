<template>
  <div class="notification-card">
    ✅ Top-up untuk {{ username }} sejumlah {{ packageName }} berhasil!
  </div>
</template>

<script>
export default {
  props: {
    username: { type: String, required: true },
    packageName: { type: String, required: true }
  }
}
</script>
