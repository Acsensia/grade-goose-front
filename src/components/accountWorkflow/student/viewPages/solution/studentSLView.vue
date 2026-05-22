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
import * as studentAllManagement from '@/utilities/account/studentAllManagement.js'
import router from '@/router'
import { useRoute } from 'vue-router'
import DataRecordView from '@/components/accountWorkflow/shared/subComponents/dataRecordView.vue'

const accessTokenStore = useAccessTokenStore()

//getting the query
const route = useRoute()
const id = route.query.id
//const id2 = route.query.id2
//getting optional back parameters
const backRoute = route.query.backRoute ?? false
const backId = route.query.backId ?? false
const backId2 = route.query.backId2 ?? false

//DataRecordView variables
const record = ref({})
const fields = [
  { key: 'tasks_task_id', label: 'Task ID', type: 'number' },
  { key: 'internet_file_link', label: 'Internet File Link', type: 'large-text' },
  { key: 'student_commentary', label: 'Student Commentary', type: 'large-text' },
  { key: 'mark', label: 'Mark', type: 'number' },
  { key: 'teacher_commentary', label: 'Teacher Commentary', type: 'large-text' },
]
const actionGroups = [
  {
    name: 'Solution Management',
    actions: [
      {
        id: 'changeLink',
        label: 'Set New Link...',
        payload: { actionType: 'change', route: '/student/manage/solution/changeLink' },
      },
      {
        id: 'changeStComm',
        label: 'Set New Student Commentary...',
        payload: { actionType: 'change', route: '/student/manage/solution/changeStComm' },
      },
    ],
  },
  {
    name: 'Related Task',
    actions: [
      {
        id: 'seeRelatedTask',
        label: 'See Related Task',
        payload: {
          actionType: 'view',
          route: '/student/view/task',
          id: record.value.tasks_task_id,
          backRoute: '/student/view/solution/',
          backId: id,
        },
      },
    ],
  },
]

onMounted(async () => {
  if (!(await studentAllManagement.checkExistsSolution(accessTokenStore.accessToken, id))) {
    await router.push({ path: '/student/add/solution', query: { id: id } })
    return
  }

  const entityInfo = await studentAllManagement.getSolutionInfo(accessTokenStore.accessToken, id)
  record.value = entityInfo
})

async function handleBackEmit() {
  if (backRoute) {
    if (backId) {
      if (backId2) {
        await router.push({ path: backRoute, query: { id: backId, id2: backId2 } })
      } else await router.push({ path: backRoute, query: { id: backId } })
    } else await router.push(backRoute)
  } else await router.push('/student')
}

async function handleExecuteActionEmit(payload) {
  if (payload.actionType === 'change') {
    await router.push({ path: payload.route, query: { id: id } })
  } else if (payload.actionType === 'view') {
    await router.push({
      path: payload.route,
      query: {
        id: id,
        backRoute: payload.backRoute,
        backId: payload.backId,
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
