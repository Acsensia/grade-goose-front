<template>
  <Suspense>
    <div class="topMenuContainer header">
      <!-- <h2>Hello, {{ firstName }} {{ lastName }} {{ patronymicName }} !</h2> -->
      <h2>Hello, sucker!</h2>
    </div>
  </Suspense>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
import { useAccessTokenStore } from '@/stores/accessToken'
import * as env from '@/config/env.js'

const accessTokenStore = useAccessTokenStore()
if (accessTokenStore.accessToken === '') await router.push('/login')

//const accountName = ref('loading...')
const _getUserInfo = async () => {
  try {
    const response = await fetch(env.BACKEND_URL + '/api/account/info/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessTokenStore.accessToken}`,
      },
      body: JSON.stringify({}),
      credentials: 'include',
    })

    if (response.ok) {
      return await response.json()
    } else {
      await router.push('/login')
    }
  } catch (error) {
    console.error('Secure data access error:', error)
  }
}
// const userInfo = await _getUserInfo()
// const firstName = ref(userInfo.first_name)
// const lastName = ref(userInfo.last_name)
// const patronymicName = ref(userInfo.patronymic_name)
</script>

<style lang="scss" scoped>
.topMenuContainer {
  border: 1px solid var(--border-color);
  padding: 5px;
  width: 100%;
  max-height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  border: 1px solid var(--border-color);
  padding: 20px;
  width: 100%;
  max-width: 400px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

button {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}
</style>
