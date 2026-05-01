import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccessTokenStore = defineStore('accessToken', () => {
  const accessToken = ref('')
  return { accessToken }
})
