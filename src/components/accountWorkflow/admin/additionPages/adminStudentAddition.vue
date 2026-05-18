<template>
  <div class="overContainer">
    <dataInsertForm
      entity-name="Student"
      :fields="[
        { name: 'email', label: 'Email Address', type: 'email', required: true, maxLength: 254 },
        { name: 'password', label: 'Password', type: 'text', required: true, maxLength: 50 },
        { name: 'first_name', label: 'First Name', type: 'text', required: true, maxLength: 50 },
        { name: 'last_name', label: 'Last Name', type: 'text', required: true, maxLength: 50 },
        {
          name: 'patronymic_name',
          label: 'Patronymic Name',
          type: 'text',
          required: true,
          maxLength: 50,
        },
      ]"
      @back="handleBackEmit"
      @submit-data="handleDataSubmit"
    ></dataInsertForm>
  </div>
</template>

<script setup>
import { useAccessTokenStore } from '@/stores/accessToken'
import dataInsertForm from '@/components/accountWorkflow/admin/subComponents/dataInsertForm.vue'
import router from '@/router'
import * as otherAccountManagement from '@/utilities/account/otherAccountManagement.js'

const accessTokenStore = useAccessTokenStore()

async function handleBackEmit() {
  await router.push('/admin/add')
}

async function handleDataSubmit(payload) {
  const additionResult = await otherAccountManagement.addNewAccount(
    accessTokenStore.accessToken,
    'student',
    payload.email,
    payload.password,
    payload.first_name,
    payload.last_name,
    payload.patronymic_name,
  )
  if (additionResult) {
    alert('Successfully added user!')
  } else {
    alert('Failed to add user!')
    console.log(`Failed to add user: ${additionResult}`)
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
  //max-width: 400px;
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
