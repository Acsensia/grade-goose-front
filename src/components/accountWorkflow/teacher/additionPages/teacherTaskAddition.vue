<template>
  <div class="overContainer">
    <dataInsertForm
      entity-name="Task"
      :fields="[
        { name: 'name', label: 'Task Name', type: 'text', required: true, maxLength: 100 },
        {
          name: 'instructions',
          label: 'Task Instructions',
          type: 'large-text',
          required: true,
          maxLength: 5000,
        },
        {
          name: 'time_due',
          label: 'Due to...',
          type: 'date',
          required: true,
          maxLength: -1,
        },
        {
          name: 'can_be_handed_in_past_due',
          label: 'Can be handed in past due?',
          type: 'boolean',
          required: true,
          maxLength: -1,
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
import * as teacherAllManagement from '@/utilities/account/teacherAllManagement.js'

const accessTokenStore = useAccessTokenStore()

async function handleBackEmit() {
  await router.push('/teacher')
}

async function handleDataSubmit(payload) {
  const additionResult = await teacherAllManagement.addNewTask(
    accessTokenStore.accessToken,
    payload.name,
    payload.instructions,
    payload.time_due,
    payload.can_be_handed_in_past_due,
  )
  if (additionResult) {
    alert('Successfully added a new task!')
  } else {
    alert('Failed to add a new task!')
    console.log(`Failed to add a new task: ${additionResult}`)
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
