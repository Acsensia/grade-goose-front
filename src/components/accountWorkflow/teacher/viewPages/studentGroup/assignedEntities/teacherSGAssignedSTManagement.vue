<template>
  <div class="overContainer">
    <div class="container">
      <DataTableView
        :rows="rows"
        :filters-config="filtersConfig"
        :group-actions="groupActions"
        :fields-config="fieldsConfig"
        :viewTitle="`Viewing All Students Assigned to a Student Group With the ${id} ID...`"
        @back="handleBackEmit"
        @view-details="handleViewDetailsEvent"
      ></DataTableView>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import DataTableView from '@/components/accountWorkflow/shared/subComponents/dataTableView.vue'
import * as teacherAllManagement from '@/utilities/account/teacherAllManagement.js'
import router from '@/router'
import { useRoute } from 'vue-router'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id

let rows = ref([])
const filtersConfig = [
  ['id', 'ID', ''],
  ['email', 'Email', ''],
  ['first_name', 'First Name', ''],
  ['last_name', 'Last Name', ''],
  ['patronymic_name', 'Patronymic Name', ''],
]
const groupActions = []
const fieldsConfig = {
  student_id: { exclude: true },
  email: { displayName: 'Email address' },
  first_name: { displayName: 'First name' },
  last_name: { displayName: 'Last name' },
  patronymic_name: { displayName: 'Patronymic name' },
}

async function reloadRows() {
  rows.value = []
  const reloadedRows = await teacherAllManagement.getStudentGroupAssignedStudents(
    accessTokenStore.accessToken,
    id,
  )
  rows.value = reloadedRows.result
}

onMounted(async () => {
  await reloadRows()
})

async function handleBackEmit() {
  await router.push({ path: '/teacher/view/studentgroup', query: { id: id } })
}

async function handleViewDetailsEvent(rowId) {
  await router.push({
    path: '/teacher/view/student',
    query: {
      id: rowId,
      backRoute: '/teacher/manage/assigned/studentgroup/seeassigned/students',
      backId: id,
    },
  })
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
