<template>
  <div class="container">
    <h2>Login Tester</h2>
    <div class="actions">
      <button type="button" @click="$router.push('/login')">Back</button>
    </div>
    <button type="button" @click="testLogin">Log In</button>
    <button type="button" @click="testAcessSecureData">Access secure data</button>
    <button type="button" @click="testRefreshAccessToken">Refresh access token</button>
    <button type="button" @click="testLogout">Log out</button>
  </div>
</template>

<script setup>
import { useAccessTokenStore } from '@/stores/accessToken'

const props = defineProps(['backendPath'])

const accessTokenStore = useAccessTokenStore()

const testLogin = async () => {
  try {
    const response = await fetch('http://' + props.backendPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'nikian778@gmail.com', password: '1234' }),
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

const testRefreshAccessToken = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/auth/refresh/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
      credentials: 'include',
    })

    if (response.ok) {
      alert('Successfully refreshed the access token!')
      accessTokenStore.accessToken = (await response.json()).accessToken
    } else {
      alert('Failed to refresh the access token.')
    }
  } catch (error) {
    console.error('Access token refresh error:', error)
  }
}

const testLogout = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/auth/logout/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
      credentials: 'include',
    })

    if (response.ok) {
      alert('Successfully logged out of the account!')
      accessTokenStore.accessToken = ''
    } else {
      alert('Failed to log out of the account.')
    }
  } catch (error) {
    console.error('Account logout error:', error)
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
