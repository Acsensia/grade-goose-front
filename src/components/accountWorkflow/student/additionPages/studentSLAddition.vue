<template>
  <div class="overContainer">
    <dataInsertForm
      :entity-name="entityName"
      :fields="[
        {
          name: 'internet_file_link',
          label: 'Internet file link',
          type: 'large-text',
          required: true,
          maxLength: 2000,
        },
        {
          name: 'student_commentary',
          label: 'Student commentary',
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
import { ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import dataInsertForm from '@/components/accountWorkflow/shared/subComponents/dataInsertForm.vue'
import router from '@/router'
import * as studentAllManagement from '@/utilities/account/studentAllManagement'
import { useRoute } from 'vue-router'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id

const entityName = ref(`Solution for Task (ID: ${id})`)

async function handleBackEmit() {
  await router.push({ path: '/student/view/task', query: { id: id } })
}

async function handleDataSubmit(payload) {
  const additionResult = await studentAllManagement.addNewSolution(
    accessTokenStore.accessToken,
    id,
    payload.internet_file_link,
    payload.student_commentary,
  )
  if (additionResult) {
    alert('Successfully added a new solution!')
    await router.push({ path: '/student/view/solution', query: { id: id } })
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
