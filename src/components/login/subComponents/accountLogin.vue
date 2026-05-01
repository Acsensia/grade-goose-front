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

const props = defineProps(['backendPath'])

const accessTokenStore = useAccessTokenStore()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    const response = await fetch('http://' + props.backendPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
      credentials: 'include',
    })

    if (response.ok) {
      alert('Successfully authenticated!')
      accessTokenStore.accessToken = (await response.json()).accessToken
    } else {
      alert('Authentication failed.')
    }
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>

<style scoped>
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
