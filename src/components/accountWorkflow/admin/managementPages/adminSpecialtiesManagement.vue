<template>
  <div class="overContainer">
    <div class="container">
      <DataTableView
        :rows="rows"
        :filters-config="filtersConfig"
        :group-actions="groupActions"
        :fields-config="fieldsConfig"
        @back="handleBackEmit"
        @view-details="handleViewDetailsEvent"
        @execute-action="handleExecuteActionEvent"
      ></DataTableView>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import DataTableView from '@/components/accountWorkflow/shared/subComponents/dataTableView.vue'
import * as entityManagement from '@/utilities/account/entityManagement.js'
import router from '@/router'

const accessTokenStore = useAccessTokenStore()

let rows = ref([])
const filtersConfig = [
  ['id', 'ID', ''],
  ['name', 'Specialty Name', ''],
  ['abbreviation', 'Specialty Abbreviation', ''],
  ['description', 'Specialty Description', ''],
]
const groupActions = [{ id: 'delete', name: 'Delete selected...' }]
const fieldsConfig = {
  specialty_id: { exclude: true },
  name: { displayName: 'Specialty name' },
  abbreviation: { displayName: 'Specialty abbreviation' },
  description: { displayName: 'Specialty description', maxLength: 50 },
}

async function reloadRows() {
  rows.value = []
  const reloadedRows = await entityManagement.getAllSpecialties(accessTokenStore.accessToken)
  rows.value = reloadedRows.result
}

onMounted(async () => {
  await reloadRows()
})

async function handleBackEmit() {
  await router.push('/admin/manage')
}

async function handleViewDetailsEvent(rowId) {
  //TODO change
  // await router.push({ path: '/admin/view/teacher', query: { id: rowId } })
}

async function handleExecuteActionEvent(payload) {
  if (payload.action.id === 'delete') {
    const deletionResult = await entityManagement.deleteSpecialtySelection(
      accessTokenStore.accessToken,
      payload.selectedIds,
    )
    if (deletionResult) {
      alert('Successfully deleted selected specialties!')
      reloadRows()
    } else {
      alert('Failed to delete selected specialties!')
    }
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
