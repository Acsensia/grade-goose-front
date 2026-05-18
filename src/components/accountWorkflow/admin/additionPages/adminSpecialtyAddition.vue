<template>
  <div class="overContainer">
    <dataInsertForm
      entity-name="Specialty"
      :fields="[
        { name: 'name', label: 'Specialty Name', type: 'text', required: true, maxLength: 100 },
        {
          name: 'abbreviation',
          label: 'Specialty Abbreviation',
          type: 'text',
          required: true,
          maxLength: 10,
        },
        {
          name: 'description',
          label: 'Specialty Description',
          type: 'large-text',
          required: true,
          maxLength: 1000,
        },
      ]"
      @back="handleBackEmit"
      @submit-data="handleDataSubmit"
    ></dataInsertForm>
  </div>
</template>

<script setup>
import { useAccessTokenStore } from '@/stores/accessToken'
import dataInsertForm from '@/components/accountWorkflow/shared/subComponents/dataInsertForm.vue'
import router from '@/router'
import * as entityManagement from '@/utilities/account/entityManagement.js'

const accessTokenStore = useAccessTokenStore()

async function handleBackEmit() {
  await router.push('/admin/add')
}

async function handleDataSubmit(payload) {
  const additionResult = await entityManagement.addNewSpecialty(
    accessTokenStore.accessToken,
    payload.name,
    payload.abbreviation,
    payload.description,
  )
  if (additionResult) {
    alert('Successfully added a new specialty!')
  } else {
    alert('Failed to add a new specialty!')
    console.log(`Failed to add a new specialty: ${additionResult}`)
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
