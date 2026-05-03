import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useAccessTokenStore = defineStore('accessToken', () => {
//   const accessToken = ref('')
//   const userType = ref('')
//   return { accessToken, userType }
// })

export const useAccessTokenStore = defineStore('accessToken', {
  state: () => ({
    accessToken: '',
    userType: '',
  }),
  actions: {
    setNewAccessToken(newAccessToken) {
      this.accessToken = newAccessToken
    },
    setNewUserType(newUserType) {
      this.userType = newUserType
    },
  },
})
