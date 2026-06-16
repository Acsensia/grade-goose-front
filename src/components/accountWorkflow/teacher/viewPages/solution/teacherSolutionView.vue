<template>
  <div class="overContainer">
    <DataRecordView
      entity-name="Solution"
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
const id2 = route.query.id2
//getting optional back parameters
const backRoute = route.query.backRoute ?? false
const backId = route.query.backId ?? false
const backId2 = route.query.backId2 ?? false

//DataRecordView variables
const record = ref({})
const fields = [
  { key: 'tasks_task_id', label: 'Task ID', type: 'number' },
  { key: 'students_student_id', label: 'Student ID', type: 'number' },
  { key: 'mark', label: 'Mark', type: 'number' },
  { key: 'internet_file_link', label: 'Internet File Link', type: 'large-text' },
  { key: 'student_commentary', label: 'Student Commentary', type: 'large-text' },
  { key: 'teacher_commentary', label: 'Teacher Commentary', type: 'large-text' },
]
const actionGroups = [
  {
    name: 'Solution Management',
    actions: [
      {
        id: 'changeMark',
        label: 'Set New Mark...',
        payload: { actionType: 'change', route: '/teacher/manage/solution/changeMark' },
      },
      {
        id: 'changeTeComm',
        label: 'Set New Teacher Commentary...',
        payload: { actionType: 'change', route: '/teacher/manage/solution/changeTeComm' },
      },
    ],
  },
  {
    name: 'Solution Assigned Entities',
    actions: [
      {
        id: 'seeAssignedTask',
        label: 'See Assigned Task...',
        payload: {
          actionType: 'view',
          route: '/teacher/view/task',
          id: id,
          backRoute: '/teacher/view/solution/',
          backId: id,
          backId2: id2,
        },
      },
      {
        id: 'seeAssignedStudent',
        label: 'See Assigned Student...',
        payload: {
          actionType: 'view',
          route: '/teacher/view/student',
          id: id2,
          backRoute: '/teacher/view/solution/',
          backId: id,
          backId2: id2,
        },
      },
    ],
  },
]

onMounted(async () => {
  const entityInfo = await teacherAllManagement.getSolutionInfo(
    accessTokenStore.accessToken,
    id,
    id2,
  )
  record.value = entityInfo
})

async function handleBackEmit() {
  if (backRoute) {
    if (backId) {
      if (backId2) {
        await router.push({ path: backRoute, query: { id: backId, id2: backId2 } })
      } else await router.push({ path: backRoute, query: { id: backId } })
    } else await router.push(backRoute)
  } else await router.push('/teacher')
}

async function handleExecuteActionEmit(payload) {
  if (payload.actionType === 'change') {
    await router.push({ path: payload.route, query: { id: id, id2: id2 } })
  } else if (payload.actionType === 'view') {
    await router.push({
      path: payload.route,
      query: {
        id: payload.id,
        backRoute: payload.backRoute,
        backId: payload.backId,
        backId2: payload.backId2,
      },
    })
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
