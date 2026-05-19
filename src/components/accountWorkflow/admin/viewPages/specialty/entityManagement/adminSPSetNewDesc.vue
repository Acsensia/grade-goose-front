<template>
  <div class="overContainer">
    <DataUpdateForm
      :entity-name="entityName"
      :field-config="{
        name: 'description',
        label: 'Description',
        type: 'big-text',
        requireCurrent: false,
        requireConfirm: false,
        maxLength: 1000,
      }"
      @back="handleBackEmit"
      @submit-update="handleSubmitUpdateEmit"
    ></DataUpdateForm>
  </div>
</template>

<script setup>
import { useAccessTokenStore } from '@/stores/accessToken'
import { useRoute } from 'vue-router'
import { setNewSpecialtyDesc } from '@/utilities/account/entityManagement'
import DataUpdateForm from '@/components/accountWorkflow/shared/subComponents/dataUpdateForm.vue'
import router from '@/router'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id

const entityName = `Specialty (ID: ${id})`

async function handleBackEmit() {
  await router.push({ path: '/admin/view/specialty', query: { id: id } })
}

async function handleSubmitUpdateEmit(payload) {
  try {
    const response = await setNewSpecialtyDesc(accessTokenStore.accessToken, id, payload.newValue)

    if (typeof response.message !== 'undefined') {
      alert('Description changed successfully.')
      await handleBackEmit()
    } else {
      alert('Description change failed.')
    }
  } catch (error) {
    console.error('Description change error:', error)
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
