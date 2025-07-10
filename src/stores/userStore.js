// src/stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: ''
  }),

  actions: {
    login(name) {
      this.username = name
    },
    logout() {
      this.username = ''
    }
  },

  getters: {
    isAdmin: (state) => state.username === 'admin',
    isLoggedIn: (state) => !!state.username
  }
})
