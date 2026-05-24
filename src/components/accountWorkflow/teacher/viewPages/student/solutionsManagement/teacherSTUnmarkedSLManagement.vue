<template>
  <div class="overContainer">
    <DataTableView
      :rows="rows"
      :filters-config="filtersConfig"
      :group-actions="groupActions"
      :fields-config="fieldsConfig"
      :viewTitle="`Managing All NOT Marked Solutions sent by a Student With the ${id} ID...`"
      @back="handleBackEmit"
      @view-details="handleViewDetailsEvent"
    ></DataTableView>
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
  ['tasks_task_id', 'Task ID', ''],
  ['students_student_id', 'Student ID', ''],
  ['internet_file_link', 'Internet File Link', ''],
  ['mark', 'Mark', ''],
  ['student_commentary', 'Student Commentary', ''],
  ['teacher_commentary', 'Teacher Commentary', ''],
]
const groupActions = []
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
  const reloadedRows = await teacherAllManagement.getStudentUnmarkedSolutions(
    accessTokenStore.accessToken,
    id,
  )
  rows.value = reloadedRows.result
}

onMounted(async () => {
  await reloadRows()
})

async function handleBackEmit() {
  await router.push({ path: '/teacher/view/student', query: { id: id } })
}

async function handleViewDetailsEvent(rowId) {
  const row = rows.value.find((row) => row.id === rowId)
  const taskId = row.tasks_task_id
  const studentId = row.students_student_id
  await router.push({
    path: '/teacher/view/solution',
    query: {
      id: taskId,
      id2: studentId,
      backRoute: '/teacher/manage/assigned/student/seeunmarked/solutions',
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
