import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
  state: () => ({
    account: undefined,
  }),
  actions: {
    setNewAccount(newAccount) {
      this.account = newAccount
    },
    reset() {
      this.account = undefined
    },
  },
})
