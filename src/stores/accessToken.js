import { defineStore } from 'pinia'

export const useAccessTokenStore = defineStore('accessToken', {
  state: () => ({
    accessToken: '',
    userType: '',
    shortUserType: '',
  }),
  actions: {
    setNewAccessToken(newAccessToken) {
      this.accessToken = newAccessToken
    },
    setNewUserType(newUserType) {
      this.userType = newUserType
    },
    setNewShortUserType(newShortUserType) {
      this.shortUserType = newShortUserType
    },
    reset() {
      this.accessToken = ''
      this.userType = ''
      this.shortUserType = ''
    },
  },
})
