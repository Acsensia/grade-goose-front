<template>
  <div class="overContainer">
    <div class="container">
      <DataTableView
        :rows="rows"
        :filters-config="filtersConfig"
        :group-actions="groupActions"
        :fields-config="fieldsConfig"
        :viewTitle="`Managing All Subjects NOT Assigned to the Student with the ${id} ID...`"
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
import { useRoute } from 'vue-router'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id

let rows = ref([])
const filtersConfig = [
  ['id', 'ID', ''],
  ['name', 'Subject Name', ''],
  ['description', 'Subject Description', ''],
]
const groupActions = [{ id: 'assign', name: 'Assign selected...' }]
const fieldsConfig = {
  subject_id: { exclude: true },
  name: { displayName: 'Subject name' },
  description: { displayName: 'Subject description', maxLength: 50 },
}

async function reloadRows() {
  rows.value = []
  const reloadedRows = await otherAccountManagement.getAccountUnassignedSubjects(
    accessTokenStore.accessToken,
    'student',
    id,
  )
  rows.value = reloadedRows.result
}

onMounted(async () => {
  await reloadRows()
})

async function handleBackEmit() {
  await router.push({ path: '/admin/view/student', query: { id: id } })
}

async function handleViewDetailsEvent(rowId) {
  await router.push({
    path: '/admin/view/subject',
    query: {
      id: rowId,
      backRoute: '/admin/manage/student/seeunassigned/subjects',
      backId: id,
    },
  })
}

async function handleExecuteActionEvent(payload) {
  if (payload.action.id === 'assign') {
    const deletionResult = await otherAccountManagement.assignAccountSubjectSelection(
      accessTokenStore.accessToken,
      'student',
      payload.selectedIds,
      id,
    )
    if (deletionResult) {
      alert('Successfully assigned selected subjects to this student account!')
      reloadRows()
    } else {
      alert('Failed to assign selected subjects to this student account!')
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
