<template>
  <div class="overContainer">
    <div class="container">
      <div class="header">
        <h2>Email Change</h2>
      </div>
      <form @submit.prevent="handleChangeEmail">
        <label for="prevEmail">Previous email</label>
        <input id="email" type="email" v-model="prevEmail" required />

        <label for="newEmail">New email</label>
        <input id="email" type="email" v-model="newEmail" required />

        <div class="actions">
          <button type="button" @click="$router.push('/account')">Back</button>
          <button type="submit">Change email</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import { changeAccountEmail } from '@/utilities/account/accountManagement'
import { useAccountStore } from '@/stores/account'

const accessTokenStore = useAccessTokenStore()
const accountStore = useAccountStore()

const prevEmail = ref('')
const newEmail = ref('')

const handleChangeEmail = async () => {
  try {
    const response = await changeAccountEmail(
      accessTokenStore.shortUserType,
      accessTokenStore.accessToken,
      prevEmail.value,
      newEmail.value,
    )

    if (typeof response.message !== 'undefined') {
      alert('Email changed successfully.')
      await accountStore.refresh(accessTokenStore.shortUserType, accessTokenStore.accessToken)
    } else {
      alert('Email change failed.')
    }
  } catch (error) {
    console.error('Email change error:', error)
  }
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
