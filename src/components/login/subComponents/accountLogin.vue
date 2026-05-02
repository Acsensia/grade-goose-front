<template>
  <div class="container">
    <h2><slot></slot> Login</h2>
    <form @submit.prevent="handleLogin">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" required />

      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" required />

      <div class="actions">
        <button type="button" @click="$router.push('/login')">Back</button>
        <button type="submit">Log In</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import router from '@/router'

const props = defineProps(['backendPath', 'redirectPath'])

const accessTokenStore = useAccessTokenStore()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    const response = await fetch(props.backendPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
      credentials: 'include',
    })

    if (response.ok) {
      alert('Successfully authenticated!')
      accessTokenStore.accessToken = (await response.json()).accessToken
      await router.push(props.redirectPath)
    } else {
      alert('Authentication failed.')
    }
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>

<style lang="scss" scoped>
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

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}
</style>
