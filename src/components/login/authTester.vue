<template>
  <div class="overContainer">
    <div class="container">
      <h2>Login Tester</h2>
      <div class="actions">
        <button type="button" @click="$router.push('/login')">Back</button>
      </div>
      <button type="button" @click="testLogin">Log In</button>
      <button type="button" @click="testAcessSecureData">Access secure data</button>
      <button type="button" @click="testLogout">Log out</button>
    </div>
  </div>
</template>

<script setup>
import { useAccessTokenStore } from '@/stores/accessToken'

const accessTokenStore = useAccessTokenStore()

const testLogin = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/auth/login/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'nikian778@gmail.com', password: '1234' }),
      credentials: 'include',
    })
    if (response.ok) {
      accessTokenStore.accessToken = (await response.json()).accessToken
    } else {
      alert('Authentication failed.')
    }
  } catch (error) {
    console.error('Login error:', error)
  }
}

const testAcessSecureData = async () => {
  try {
    const response = await fetch('http://localhost:3000/test/test1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessTokenStore.accessToken}`,
      },
      body: JSON.stringify({}),
      credentials: 'include',
    })

    if (response.ok) {
      alert('Successfully accessed protected resource!')
    } else {
      alert('Failed to access a protected resource.')
    }
  } catch (error) {
    console.error('Secure data access error:', error)
  }
}

const testLogout = async () => {
  accessTokenStore.accessToken = ''
  alert('Successfully logged out of the account!')
}
</script>

<style scoped>
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
