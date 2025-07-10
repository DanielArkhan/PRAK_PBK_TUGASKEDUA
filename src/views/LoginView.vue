<template>
  <div class="login">
    <h1>Login</h1>
    <input v-model="username" placeholder="Masukkan username" />
    <button @click="handleLogin">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const emit = defineEmits(['success'])
const username = ref('')
const error = ref('')
const store = useUserStore()
const router = useRouter()

function handleLogin() {
  error.value = ''

  if (!username.value.trim()) {
    error.value = 'Username tidak boleh kosong'
    return
  }

  store.login(username.value)

  // Emit event untuk App.vue (menampilkan notifikasi login)
  emit('success', {
    type: 'login',
    username: username.value
  })
  console.log('[LoginView] emit success', username.value)

  // ✅ Tunggu notifikasi tampil dulu (1.5 detik), baru redirect
  setTimeout(() => {
    if (username.value === 'admin') {
      router.push('/orders')
    } else {
      router.push('/')
    }
  }, 1500)
}
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.error {
  margin-top: 10px;
  color: red;
  font-size: 14px;
}
</style>
