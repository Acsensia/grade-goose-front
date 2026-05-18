import { defineStore } from 'pinia'
import { getAccountInfo } from '@/utilities/account/accountManagement.js'

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
    async refresh(shortUserType, accessToken) {
      let foundAccountInfo = await getAccountInfo(shortUserType, accessToken)
      if (!foundAccountInfo)
        throw new Error(
          '(account.js/defineStore/refresh)Failed to find the account specified in the database!',
        )
      this.account = foundAccountInfo
    },
  },
})
