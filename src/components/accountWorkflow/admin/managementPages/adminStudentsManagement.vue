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
import * as otherAccountManagement from '@/utilities/account/otherAccountManagement.js'
import router from '@/router'

const accessTokenStore = useAccessTokenStore()

let rows = ref([])
const filtersConfig = [
  ['id', 'ID', ''],
  ['email', 'Email', ''],
  ['first_name', 'First Name', ''],
  ['last_name', 'Last Name', ''],
  ['patronymic_name', 'Patronymic Name', ''],
]
const groupActions = [{ id: 'delete', name: 'Delete selected...' }]
const fieldsConfig = {
  student_id: { exclude: true },
  email: { displayName: 'Email address' },
  first_name: { displayName: 'First name' },
  last_name: { displayName: 'Last name' },
  patronymic_name: { displayName: 'Patronymic name' },
}

async function reloadRows() {
  rows.value = []
  const reloadedRows = await otherAccountManagement.getAllAccounts(
    accessTokenStore.accessToken,
    'student',
    'student_id',
  )
  rows.value = reloadedRows.result
}

onMounted(async () => {
  await reloadRows()
})

async function handleBackEmit() {
  await router.push('/admin/manage')
}

async function handleViewDetailsEvent(rowId) {
  await router.push({ path: '/admin/view/student', query: { id: rowId } })
}

async function handleExecuteActionEvent(payload) {
  if (payload.action.id === 'delete') {
    const deletionResult = await otherAccountManagement.deleteAccountSelection(
      accessTokenStore.accessToken,
      'student',
      payload.selectedIds,
    )
    if (deletionResult) {
      alert('Successfully deleted selected student accounts!')
      reloadRows()
    } else {
      alert('Failed to delete selected student accounts!')
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
