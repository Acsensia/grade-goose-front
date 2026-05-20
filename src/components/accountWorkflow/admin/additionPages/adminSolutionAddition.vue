<template>
  <div class="overContainer">
    <dataInsertForm
      entity-name="Task"
      :fields="[
        { name: 'tasks_task_id', label: 'Task ID', type: 'number', required: true },
        { name: 'students_student_id', label: 'Student ID', type: 'number', required: true },
        {
          name: 'internet_file_link',
          label: 'Internet file link',
          type: 'large-text',
          required: true,
          maxLength: 2000,
        },
        {
          name: 'mark',
          label: 'Mark',
          type: 'number',
          required: false,
        },
        {
          name: 'student_commentary',
          label: 'Student commentary',
          type: 'large-text',
          required: false,
          maxLength: 2000,
        },
        {
          name: 'teacher_commentary',
          label: 'Teacher commentary',
          type: 'large-text',
          required: false,
          maxLength: 2000,
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
  if (payload.mark) {
    if (payload.mark < 0) payload.mark = 0
    if (payload.mark > 100) payload.mark = 100
  }
  const additionResult = await entityManagement.addNewSolution(
    accessTokenStore.accessToken,
    payload.tasks_task_id,
    payload.students_student_id,
    payload.internet_file_link,
    payload.mark,
    payload.student_commentary,
    payload.teacher_commentary,
  )
  if (additionResult) {
    alert('Successfully added a new solution!')
  } else {
    alert('Failed to add a new solution!')
    console.log(`Failed to add a new solution: ${additionResult}`)
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
