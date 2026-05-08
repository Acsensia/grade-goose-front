<template>
  <div class="overContainer">
    <div class="container">
      <div class="header">
        <h2>First Name Change</h2>
      </div>
      <form @submit.prevent="handleChangeFName">
        <label for="newFName">New first name</label>
        <input id="text" type="text" v-model="newFName" required />

        <div class="actions">
          <button type="button" @click="$router.push('/account')">Back</button>
          <button type="submit">Change first name</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import { changeAccountFName } from '@/utilities/account/accountManagement'

const accessTokenStore = useAccessTokenStore()

const newFName = ref('')

const handleChangeFName = async () => {
  try {
    const response = await changeAccountFName(
      accessTokenStore.shortUserType,
      accessTokenStore.accessToken,
      newFName,
    )

    if (response.ok) {
      alert('First name changed successfully.')
    } else {
      alert('last name change failed.')
    }
    newFName.value = ''
  } catch (error) {
    console.error('Last name change error:', error)
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
