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
  ['tasks_task_id', 'Task ID', ''],
  ['students_student_id', 'Student ID', ''],
  ['internet_file_link', 'Internet File Link', ''],
  ['mark', 'Mark', ''],
  ['student_commentary', 'Student Commentary', ''],
  ['teacher_commentary', 'Teacher Commentary', ''],
]
const groupActions = [{ id: 'delete', name: 'Delete selected...' }]
const fieldsConfig = {
  tasks_task_id: { exclude: true },
  students_student_id: { exclude: true },
  internet_file_link: { displayName: 'Internet file link', maxLength: 50 },
  mark: { displayName: 'Mark' },
  student_commentary: { displayName: 'Student commentary', maxLength: 50 },
  teacher_commentary: { displayName: 'Teacher commentary', maxLength: 50 },
}

async function reloadRows() {
  rows.value = []
  const reloadedRows = await entityManagement.getAllSolutions(accessTokenStore.accessToken)
  rows.value = reloadedRows.result
}

onMounted(async () => {
  await reloadRows()
})

async function handleBackEmit() {
  await router.push('/admin/manage')
}

async function handleViewDetailsEvent(rowId) {
  await router.push({ path: '/admin/view/solution', query: { id: rowId } })
}

async function handleExecuteActionEvent(payload) {
  if (payload.action.id === 'delete') {
    const realIdPairs = []
    payload.selectedIds.forEach((fakeId) => {
      const foundRow = rows.value.find((row) => row.id === fakeId)
      realIdPairs.push([foundRow.tasks_task_id, foundRow.students_student_id])
    })
    const deletionResult = await entityManagement.deleteSolutionSelection(
      accessTokenStore.accessToken,
      realIdPairs,
    )
    if (deletionResult) {
      alert('Successfully deleted selected solutions!')
      reloadRows()
    } else {
      alert('Failed to delete selected solutions!')
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
