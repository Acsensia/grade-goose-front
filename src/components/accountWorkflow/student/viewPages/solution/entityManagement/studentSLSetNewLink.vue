<template>
  <div class="overContainer">
    <DataUpdateForm
      :entity-name="entityName"
      :field-config="{
        name: 'internet_file_link',
        label: 'Internet File Link',
        type: 'big-text',
        requireCurrent: false,
        requireConfirm: false,
        maxLength: 2000,
      }"
      @back="handleBackEmit"
      @submit-update="handleSubmitUpdateEmit"
    ></DataUpdateForm>
  </div>
</template>

<script setup>
import { useAccessTokenStore } from '@/stores/accessToken'
import { useRoute } from 'vue-router'
import { setNewSolutionLink } from '@/utilities/account/studentAllManagement'
import DataUpdateForm from '@/components/accountWorkflow/shared/subComponents/dataUpdateForm.vue'
import router from '@/router'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id

const entityName = `Solution (Task ID: ${id})`

async function handleBackEmit() {
  await router.push({ path: '/student/view/solution', query: { id: id } })
}

async function handleSubmitUpdateEmit(payload) {
  try {
    const response = await setNewSolutionLink(accessTokenStore.accessToken, id, payload.newValue)

    if (typeof response.message !== 'undefined') {
      alert('Link changed successfully.')
      await handleBackEmit()
    } else {
      alert('Link change failed.')
    }
  } catch (error) {
    console.error('Link change error:', error)
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
