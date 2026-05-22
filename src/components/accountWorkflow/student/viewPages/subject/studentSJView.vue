<template>
  <div class="overContainer">
    <DataRecordView
      entity-name="Subject"
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
// const id2 = route.query.id2
//getting optional back parameters
const backRoute = route.query.backRoute ?? false
const backId = route.query.backId ?? false
const backId2 = route.query.backId2 ?? false

//DataRecordView variables
const record = ref({})
const fields = [
  { key: 'id', label: 'ID', type: 'number' },
  { key: 'name', label: 'Subject Name', type: 'string' },
  { key: 'description', label: 'Subject Description', type: 'large-text' },
]
const actionGroups = [
  {
    name: 'Subject Tasks Management',
    actions: [
      {
        id: 'seeAssignedTasks',
        label: 'See Assigned Tasks...',
        payload: { route: '/student/manage/assigned/subject/seeassigned/tasks' },
      },
      {
        id: 'seeDoneTasks',
        label: 'See Done Tasks...',
        payload: { route: '/student/manage/assigned/subject/seedone/tasks' },
      },
      {
        id: 'seeUndoneTasks',
        label: 'See Undone Tasks...',
        payload: { route: '/student/manage/assigned/subject/seeundone/tasks' },
      },
    ],
  },
  {
    name: 'Subject Solutions Management',
    actions: [
      {
        id: 'seeMarkedSolutions',
        label: 'See Marked Solutions...',
        payload: { route: '/student/manage/assigned/subject/seemarked/solutions' },
      },
      {
        id: 'seeUnmarkedSolutions',
        label: 'See Unmarked Solutions...',
        payload: { route: '/student/manage/assigned/subject/seeunmarked/solutions' },
      },
    ],
  },
]

onMounted(async () => {
  const entityInfo = await studentAllManagement.getSubjectInfo(accessTokenStore.accessToken, id)
  record.value = entityInfo
})

async function handleBackEmit() {
  if (backRoute) {
    if (backId) {
      if (backId2) {
        await router.push({ path: backRoute, query: { id: backId, id2: backId2 } })
      } else await router.push({ path: backRoute, query: { id: backId } })
    } else await router.push(backRoute)
  } else await router.push('/student/manage/assigned/subjects')
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
