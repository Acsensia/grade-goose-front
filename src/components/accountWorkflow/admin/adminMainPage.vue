<template>
  <div class="topMenuContainer header">
    <h2>{{ firstName }} {{ lastName[0] }}. {{ patronymicName[0] }}.</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router'
import { useAccessTokenStore } from '@/stores/accessToken'
import * as env from '@/config/env.js'

const accessTokenStore = useAccessTokenStore()

const userInfo = ref(undefined)

const firstName = ref('loading first name...')
const lastName = ref('loading last name...')
const patronymicName = ref('loading patronymic name...')

onMounted(async () => {
  if (accessTokenStore.accessToken === '') await router.push('/login')

  userInfo.value = await _getUserInfo()
  firstName.value = userInfo.value.first_name
  lastName.value = userInfo.value.last_name
  patronymicName.value = userInfo.value.patronymic_name
})

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
