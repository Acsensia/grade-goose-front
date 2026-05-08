<template>
  <div class="topMenu">
    <span class="websiteName">Grade Goose</span>
    <div class="topMenuRight">
      <div v-if="accountStore.account">
        <router-link class="accountManagementLink" to="/account">
          {{ accountStore.account.last_name }} {{ accountStore.account.first_name[0] }}.
          {{ accountStore.account.patronymic_name[0] }}. (User type:
          {{ capitalizeFirstLetter(accessTokenStore.userType) }})
        </router-link>
        <button type="button" @click="__logout"><span>Log out...</span></button>
      </div>
      <div v-else>
        <button type="button" @click="$router.push('/login')"><span>Log in...</span></button>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAccountStore } from './stores/account'
import * as accountInfo from '@/utilities/account/accountInfo.js'
import { useAccessTokenStore } from './stores/accessToken'
import { capitalizeFirstLetter } from './utilities/strings/stringsUtilities'
import router from './router'

const accessTokenStore = useAccessTokenStore()
const accountStore = useAccountStore()

accessTokenStore.$subscribe((/*mutation, state*/) => {
  __refreshAccountStore()
})

onMounted(async () => {
  if (
    !accountStore.account &&
    accessTokenStore.accessToken !== '' &&
    accessTokenStore.userType !== ''
  ) {
    __refreshAccountStore()
  }
})

async function __refreshAccountStore() {
  let foundAccountInfo
  if (accessTokenStore.userType === 'student') {
    foundAccountInfo = await accountInfo.getStudentInfo(accessTokenStore.accessToken)
  } else if (accessTokenStore.userType === 'teacher') {
    foundAccountInfo = await accountInfo.getTeacherInfo(accessTokenStore.accessToken)
  } else if (accessTokenStore.userType === 'administrator') {
    foundAccountInfo = await accountInfo.getAdminInfo(accessTokenStore.accessToken)
  } else
    throw new Error(
      '(App.vue/onMounted)Failed to find a matching function for the userType provided!',
    )
  if (!foundAccountInfo)
    throw new Error('(App.vue/onMounted)Failed to find the account specified in the database!')
  accountStore.setNewAccount(foundAccountInfo)
}

async function __logout() {
  accessTokenStore.reset()
  accountStore.reset()
  await router.push('/login')
}
</script>

<style lang="scss">
/* global styles applied to the document root */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --border-color: #000000;
}

:root[data-theme='dark'] {
  --bg-color: #000000;
  --text-color: #ffffff;
  --border-color: #ffffff;
}

/* general global styles */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: sans-serif;
  margin: 0;
  display: flex;
  //justify-content: center;
  //align-items: center;
  min-height: 100vh;
  min-width: 100%;
  transition:
    background-color 0.3s,
    color 0.3s;
}

#app {
  min-height: 100%;
  min-width: 98%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  .topMenu {
    display: flex;
    justify-content: left;
    align-items: center;

    height: 30px;

    padding: 1px 3px;

    border: 1px solid var(--border-color);

    width: 100%;

    .websiteName {
      font-size: large;

      width: 20%;
    }
    .topMenuRight {
      display: flex;
      justify-content: right;
      align-items: center;

      width: 80%;
      height: 100%;

      div {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;

        gap: 5px;

        .accountManagementLink {
          font-size: small;
          color: var(--text-color);
          background-color: var(--bg-color);
        }

        button {
          background-color: var(--bg-color);
          color: var(--text-color);
          border: 1px solid var(--border-color);
          padding: 5px 10px;
          cursor: pointer;
          transition: all 0.2s;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 100px;
          height: 20px;

          span {
            font-size: small;
          }
        }
        button:hover {
          background-color: var(--text-color);
          color: var(--bg-color);
        }
      }
    }
  }
}
</style>
