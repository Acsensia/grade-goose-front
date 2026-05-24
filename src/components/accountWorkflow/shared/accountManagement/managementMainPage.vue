<template>
  <div class="overContainer">
    <div class="container">
      <div class="header">
        <h2>Own Account Management</h2>
      </div>
      <div class="button-group">
        <button @click="$router.push('/account/changeEmail')">Change email...</button>
        <button @click="$router.push('/account/changePass')">Change password...</button>
        <button @click="$router.push('/account/changeFName')">Change first name...</button>
        <button @click="$router.push('/account/changeLName')">Change last name...</button>
        <button @click="$router.push('/account/changePName')">Change patronymic name...</button>
      </div>
      <div class="button-group">
        <button @click="handleMainPage">Back to Main Page</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import router from '@/router'
import { useAccessTokenStore } from '@/stores/accessToken'

const accessTokenStore = useAccessTokenStore()

onMounted(async () => {
  if (accessTokenStore.accessToken === '') await router.push('/login')
})

async function handleMainPage() {
  if (accessTokenStore.shortUserType !== '') {
    await router.push(`/${accessTokenStore.shortUserType}`)
  } else await router.push('/login')
}
</script>

<style lang="scss" scoped>
.overContainer {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  border: 1px solid var(--border-color);
  padding: 20px;
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 20px;
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
