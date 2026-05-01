import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRefreshTokenStore = defineStore('counter', () => {
  const token = ref('')
  return { token }
})
