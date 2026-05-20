<template>
  <div class="overContainer">
    <DataRecordView
      entity-name="Student"
      :record="record"
      :fields="fields"
      :action-groups="actionGroups"
      @back="handleBackEmit"
      @execute-action="handleExecuteActionEmit"
    ></DataRecordView>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAccessTokenStore } from '@/stores/accessToken'
import * as teacherAllManagement from '@/utilities/account/teacherAllManagement.js'
import router from '@/router'
import { useRoute } from 'vue-router'
import DataRecordView from '@/components/accountWorkflow/shared/subComponents/dataRecordView.vue'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id
//getting optional back parameters
const backRoute = route.query.backRoute ?? false
const backId = route.query.backId ?? false

//DataRecordView variables
const record = ref({})
const fields = [
  { key: 'id', label: 'ID', type: 'number' },
  { key: 'email', label: 'Email', type: 'string' },
  { key: 'first_name', label: 'First Name', type: 'string' },
  { key: 'last_name', label: 'Last Name', type: 'string' },
  { key: 'patronymic_name', label: 'Patronymic Name', type: 'string' },
]
const actionGroups = [
  {
    name: 'Student Task Management',
    actions: [
      {
        id: 'seeAssignedTasks',
        label: 'See Assigned Tasks...',
        payload: { route: '/teacher/manage/assigned/student/seeassigned/tasks' },
      },
      {
        id: 'seeUnassignedTasks',
        label: 'See Unassigned Tasks...',
        payload: { route: '/teacher/manage/assigned/student/seeunassigned/tasks' },
      },
    ],
  },
]

onMounted(async () => {
  const entityInfo = await teacherAllManagement.getStudentInfo(accessTokenStore.accessToken, id)
  record.value = entityInfo
})

async function handleBackEmit() {
  if (backRoute) {
    if (backId) await router.push({ path: backRoute, query: { id: backId } })
    else await router.push(backRoute)
  } else await router.push('/teacher')
}

async function handleExecuteActionEmit(payload) {
  await router.push({ path: payload.route, query: { id: id } })
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
