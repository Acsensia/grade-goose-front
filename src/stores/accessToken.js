import { defineStore } from 'pinia'

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
    reset() {
      this.accessToken = ''
      this.userType = ''
    },
  },
})
